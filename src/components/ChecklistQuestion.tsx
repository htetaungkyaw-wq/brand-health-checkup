import { memo } from "react";
import { ChecklistItem } from "@/types/checklist";

interface ChecklistQuestionProps {
  item: ChecklistItem;
  isChecked: boolean;
  onToggle: () => void;
}

const ChecklistQuestion = memo(
  ({ item, isChecked, onToggle }: ChecklistQuestionProps) => {
    return (
      <li className="flex items-start gap-4 p-5 rounded-xl border bg-card transition-all hover:border-primary/20">
        <div>
          <button
            onClick={onToggle}
            aria-pressed={isChecked}
            className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
              isChecked
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-background border-2 hover:border-primary/50"
            }`}
          >
            {isChecked ? "Yes" : "No"}
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground leading-snug">
                {item.q}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Weight: {item.weight}
              </p>
            </div>
            <div
              className={`text-sm font-medium ${
                isChecked ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {isChecked ? "✓ Done" : "Not done"}
            </div>
          </div>

          {!isChecked && (
            <div
              className="mt-4 text-sm text-foreground/80 bg-background p-4 rounded-lg border border-primary/10"
              style={{
                background: "var(--brand-gradient-subtle)",
              }}
            >
              <strong className="text-foreground">Suggestion:</strong> {item.help}
            </div>
          )}
        </div>
      </li>
    );
  }
);

ChecklistQuestion.displayName = "ChecklistQuestion";

export default ChecklistQuestion;
