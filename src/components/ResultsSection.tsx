import { memo } from "react";
import { ChecklistItem } from "@/types/checklist";

interface ResultsSectionProps {
  incompleteItems: ChecklistItem[];
}

const ResultsSection = memo(({ incompleteItems }: ResultsSectionProps) => {
  return (
    <section className="mt-8 p-6 bg-card rounded-xl border" style={{ boxShadow: "var(--shadow-soft)" }}>
      <h3 className="text-xl font-semibold text-foreground">
        Tailored Next Steps
      </h3>
      <p className="text-sm text-muted-foreground mt-2">
        Below are specific, actionable steps for the things you answered "No" to.
        Start from the top of the list — low effort, high impact.
      </p>

      {incompleteItems.length === 0 ? (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="font-semibold text-primary">
            🎉 Nice — you've ticked everything! Consider focusing on distribution
            and measurement to squeeze more growth from your existing assets.
          </p>
        </div>
      ) : (
        <ol className="mt-6 space-y-4">
          {incompleteItems.map((item, idx) => (
            <li
              key={item.id}
              className="flex gap-4 p-4 rounded-lg bg-background border"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">{item.q}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.help}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
});

ResultsSection.displayName = "ResultsSection";

export default ResultsSection;
