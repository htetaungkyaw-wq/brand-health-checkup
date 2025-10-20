import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChecklistResult } from "@/types/checklist";
import { Download, Share2, Calendar, TrendingUp } from "lucide-react";

interface ScoreCardProps {
  score: number;
  uplift: number;
  onDownload: () => void;
  onShare: () => void;
  onConsult: () => void;
}

const ScoreCard = memo(
  ({ score, uplift, onDownload, onShare, onConsult }: ScoreCardProps) => {
    const [animatedScore, setAnimatedScore] = useState(0);
    const [animatedUplift, setAnimatedUplift] = useState(0);

    useEffect(() => {
      const scoreTimer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedScore((prev) => {
            if (prev >= score) {
              clearInterval(interval);
              return score;
            }
            return Math.min(prev + 2, score);
          });
        }, 20);
        return () => clearInterval(interval);
      }, 100);

      return () => clearTimeout(scoreTimer);
    }, [score]);

    useEffect(() => {
      const upliftTimer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedUplift((prev) => {
            if (prev >= uplift) {
              clearInterval(interval);
              return uplift;
            }
            return Math.min(prev + 1, uplift);
          });
        }, 30);
        return () => clearInterval(interval);
      }, 300);

      return () => clearTimeout(upliftTimer);
    }, [uplift]);

    const getScoreColor = (s: number) => {
      if (s >= 80) return "text-green-500";
      if (s >= 50) return "text-primary";
      return "text-accent";
    };

    return (
      <aside
        className="p-6 rounded-2xl border-2 lg:sticky lg:top-6 animate-fade-in"
        style={{
          background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--primary) / 0.05) 50%, hsl(var(--accent) / 0.05) 100%)",
          boxShadow: "var(--shadow-medium)",
        }}
      >
        <h4 className="font-semibold text-lg text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Your Brand Score
        </h4>
        <div className="mt-6 space-y-6">
          <div className="relative">
            <div
              className={`text-7xl font-extrabold mb-2 transition-colors duration-500 ${getScoreColor(
                animatedScore
              )}`}
            >
              {animatedScore}
              <span className="text-3xl">%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                style={{ width: `${animatedScore}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">Brand Health Score</p>
          </div>

          <div className="pt-4 border-t animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
              Estimated uplift potential
            </p>
            <div className="text-5xl font-bold text-accent mb-2 animate-scale-in">
              +{animatedUplift}
              <span className="text-2xl">%</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Based on brand fundamentals analysis. The fewer boxes ticked, the
              more room to grow.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              onClick={onDownload}
              variant="outline"
              className="w-full justify-start gap-2 hover-scale"
            >
              <Download className="w-4 h-4" />
              Download Results
            </Button>
            <Button
              onClick={onShare}
              variant="outline"
              className="w-full justify-start gap-2 hover-scale"
            >
              <Share2 className="w-4 h-4" />
              Share Link
            </Button>
            <Button
              onClick={onConsult}
              className="w-full justify-start gap-2 bg-primary hover:bg-primary/90 shadow-md hover-scale"
            >
              <Calendar className="w-4 h-4" />
              Request Consultation
            </Button>
          </div>

          <details className="text-sm text-muted-foreground pt-4 border-t">
            <summary className="cursor-pointer font-medium mb-2 hover:text-foreground transition-colors">
              Why this matters
            </summary>
            <p className="text-xs leading-relaxed mt-2">
              Strong brand fundamentals amplify every marketing dollar. Fixing
              core gaps typically reduces CAC and increases conversion rates.
            </p>
          </details>
        </div>
      </aside>
    );
  }
);

ScoreCard.displayName = "ScoreCard";

export default ScoreCard;
