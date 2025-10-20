import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChecklistResult } from "@/types/checklist";

interface ScoreCardProps {
  score: number;
  uplift: number;
  onDownload: () => void;
  onShare: () => void;
  onConsult: () => void;
}

const ScoreCard = memo(
  ({ score, uplift, onDownload, onShare, onConsult }: ScoreCardProps) => {
    return (
      <aside
        className="p-6 rounded-xl border"
        style={{
          background: "var(--brand-gradient-subtle)",
          boxShadow: "var(--shadow-medium)",
        }}
      >
        <h4 className="font-semibold text-lg text-foreground">Instant Score</h4>
        <div className="mt-6">
          <div className="text-5xl font-extrabold text-primary">{score}%</div>
          <p className="text-sm text-muted-foreground mt-2">Brand Health</p>

          <div className="mt-6 pt-6 border-t">
            <div className="text-sm text-muted-foreground">
              Estimated realistic uplift potential
            </div>
            <div className="mt-2 text-3xl font-bold text-accent">+{uplift}%</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              This is an indicative estimate: the fewer boxes you tick, the more
              room to grow. We base this on brand fundamentals — not channel
              spend.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button
              onClick={onDownload}
              variant="outline"
              className="w-full"
            >
              Download result (JSON)
            </Button>
            <Button onClick={onShare} variant="outline" className="w-full">
              Copy share link
            </Button>
            <Button
              onClick={onConsult}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Save & request consult
            </Button>
          </div>

          <details className="mt-6 text-sm text-muted-foreground">
            <summary className="cursor-pointer hover:text-foreground transition-colors font-medium">
              Why this matters
            </summary>
            <p className="mt-3 leading-relaxed text-xs">
              Strong brand fundamentals (positioning, identity, measurement)
              amplify every marketing dollar you spend. Fixing core gaps usually
              reduces CAC and increases conversion rate — that's where this
              uplift comes from.
            </p>
          </details>
        </div>
      </aside>
    );
  }
);

ScoreCard.displayName = "ScoreCard";

export default ScoreCard;
