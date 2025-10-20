import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/Header";
import ChecklistQuestion from "@/components/ChecklistQuestion";
import ScoreCard from "@/components/ScoreCard";
import ResultsSection from "@/components/ResultsSection";
import ContactForm from "@/components/ContactForm";
import { CHECKLIST_ITEMS } from "@/data/checklist";
import { ChecklistAnswers } from "@/types/checklist";
import {
  calculateScore,
  estimateUplift,
  saveAnswersToStorage,
  loadAnswersFromStorage,
  clearAnswersFromStorage,
} from "@/utils/checklist";

const Index = () => {
  const [answers, setAnswers] = useState<ChecklistAnswers>(
    loadAnswersFromStorage()
  );
  const [showResults, setShowResults] = useState(false);

  const score = calculateScore(answers);
  const uplift = estimateUplift(score);

  useEffect(() => {
    saveAnswersToStorage(answers);
  }, [answers]);

  useEffect(() => {
    // Check for shared results in URL
    const params = new URLSearchParams(window.location.search);
    const sharedData = params.get("hos");
    if (sharedData) {
      try {
        const decoded = JSON.parse(atob(decodeURIComponent(sharedData)));
        if (decoded.answers) {
          setAnswers(decoded.answers);
          setShowResults(true);
          toast.success("Checklist loaded from share link!");
        }
      } catch (e) {
        console.error("Failed to import from URL:", e);
      }
    }
  }, []);

  const toggleAnswer = (id: string) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setAnswers({});
    setShowResults(false);
    clearAnswersFromStorage();
    toast.info("Checklist reset");
  };

  const downloadResult = () => {
    const payload = {
      timestamp: new Date().toISOString(),
      score,
      uplift,
      answers,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `house-of-sid-checklist-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Results downloaded!");
  };

  const copyShareLink = () => {
    const data = encodeURIComponent(
      btoa(JSON.stringify({ answers, score, uplift }))
    );
    const url = `${window.location.origin}${window.location.pathname}?hos=${data}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Share link copied to clipboard!");
    });
  };

  const requestConsult = () => {
    toast.info(
      "To capture leads, integrate with your backend or use Lovable Cloud.",
      {
        description: "Scroll down to the contact form to reach out!",
      }
    );
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const incompleteItems = CHECKLIST_ITEMS.filter(
    (item) => answers[item.id] !== true
  );

  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section
          id="checklist"
          className="bg-card rounded-2xl p-8 md:p-10 border"
          style={{ boxShadow: "var(--shadow-medium)" }}
        >
          <div className="md:flex md:items-start md:justify-between md:gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Quick Brand Health Check
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Answer 8 simple questions. We'll give you a score, a realistic
                uplift estimate, and tailored tips for the things you haven't
                done yet.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
              <Button
                onClick={() => setShowResults(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                See results
              </Button>
              <Button onClick={resetChecklist} variant="outline">
                Reset
              </Button>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {CHECKLIST_ITEMS.map((item) => (
                  <ChecklistQuestion
                    key={item.id}
                    item={item}
                    isChecked={answers[item.id] === true}
                    onToggle={() => toggleAnswer(item.id)}
                  />
                ))}
              </ul>
            </div>

            <ScoreCard
              score={score}
              uplift={uplift}
              onDownload={downloadResult}
              onShare={copyShareLink}
              onConsult={requestConsult}
            />
          </div>

          {showResults && <ResultsSection incompleteItems={incompleteItems} />}
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mt-8 bg-card rounded-xl p-8 border"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <h3 className="text-2xl font-semibold text-foreground">
            About House of Sid
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            We help brands fix the things that matter: story, identity, and
            repeatable distribution. If you want, paste your checklist result
            when you contact us — we'll give a short plan based on your exact
            answers.
          </p>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <footer className="border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} House of Sid — All rights reserved</p>
          <p>Built with care · Interactive checklist by House of Sid</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
