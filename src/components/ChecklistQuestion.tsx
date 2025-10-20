import { memo, useState } from "react";
import { ChecklistItem } from "@/types/checklist";
import { Slider } from "@/components/ui/slider";
import { Smartphone, Monitor, Tv, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

interface ChecklistQuestionProps {
  item: ChecklistItem;
  isChecked: boolean | number | string[];
  onToggle: () => void;
  onSliderChange?: (value: number) => void;
  onDeviceToggle?: (device: string) => void;
}

const CHANNELS = [
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tv", label: "TV/OOH", icon: Tv },
  { id: "email", label: "Email", icon: Mail },
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "facebook", label: "Facebook", icon: Facebook },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin },
  { id: "youtube", label: "YouTube", icon: Youtube },
];

const ChecklistQuestion = memo(
  ({ item, isChecked, onToggle, onSliderChange, onDeviceToggle }: ChecklistQuestionProps) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggleClick = () => {
      setIsAnimating(true);
      onToggle();
      setTimeout(() => setIsAnimating(false), 300);
    };

    const renderInput = () => {
      if (item.inputType === "toggle") {
        const checked = isChecked === true;
        return (
          <button
            onClick={handleToggleClick}
            aria-pressed={checked}
            className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-bold text-sm transition-all duration-300 ${
              checked
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                : "bg-background border-2 border-muted hover:border-primary/50 hover:scale-105"
            } ${isAnimating ? "animate-scale-in" : ""}`}
          >
            <span className="text-2xl mb-1">{checked ? "✓" : "○"}</span>
            <span className="text-xs">{checked ? "Yes" : "No"}</span>
          </button>
        );
      }

      if (item.inputType === "slider") {
        const value = typeof isChecked === "number" ? isChecked : 0;
        return (
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Slider
                  value={[value]}
                  onValueChange={(vals) => onSliderChange?.(vals[0])}
                  min={0}
                  max={100}
                  step={10}
                  className="cursor-pointer"
                />
              </div>
              <div className="min-w-[60px] text-center">
                <div className="text-2xl font-bold text-primary">{value}%</div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>{item.sliderLabels?.min}</span>
              <span>{item.sliderLabels?.max}</span>
            </div>
          </div>
        );
      }

      if (item.inputType === "devices") {
        const selectedDevices = Array.isArray(isChecked) ? isChecked : [];
        return (
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-3">
              {CHANNELS.map((channel) => {
                const Icon = channel.icon;
                const isSelected = selectedDevices.includes(channel.id);
                return (
                  <button
                    key={channel.id}
                    onClick={() => onDeviceToggle?.(channel.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                        : "bg-card border-muted hover:border-primary/50 hover:scale-105"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-medium text-center">{channel.label}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Selected: {selectedDevices.length} channel{selectedDevices.length !== 1 ? "s" : ""}
            </p>
          </div>
        );
      }

      return null;
    };

    const getCompletionStatus = () => {
      if (item.inputType === "toggle") return isChecked === true;
      if (item.inputType === "slider") return typeof isChecked === "number" && isChecked >= 70;
      if (item.inputType === "devices") return Array.isArray(isChecked) && isChecked.length >= 3;
      return false;
    };

    const isComplete = getCompletionStatus();

    return (
      <li className="flex items-start gap-6 p-6 rounded-2xl border bg-card transition-all hover:border-primary/20 hover:shadow-md">
        {item.inputType === "toggle" && <div className="shrink-0">{renderInput()}</div>}
        
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="font-semibold text-foreground leading-snug text-lg">
                {item.q}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Impact weight: {item.weight}
              </p>
            </div>
            <div
              className={`shrink-0 text-sm font-medium px-3 py-1 rounded-full ${
                isComplete ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}
            >
              {isComplete ? "✓ Complete" : "Incomplete"}
            </div>
          </div>

          {item.inputType !== "toggle" && (
            <div className="mt-4">{renderInput()}</div>
          )}

          {!isComplete && (
            <div
              className="text-sm text-foreground/80 bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/10"
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
