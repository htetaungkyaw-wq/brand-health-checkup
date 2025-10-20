import { ChecklistAnswers } from "@/types/checklist";
import { CHECKLIST_ITEMS } from "@/data/checklist";

export function calculateScore(answers: ChecklistAnswers): number {
  const totalWeight = CHECKLIST_ITEMS.reduce((sum, item) => sum + item.weight, 0);
  const yesWeight = CHECKLIST_ITEMS.reduce(
    (sum, item) => sum + (answers[item.id] === true ? item.weight : 0),
    0
  );
  return Math.round((yesWeight / totalWeight) * 100);
}

export function estimateUplift(scorePercent: number): number {
  // Simple model: less complete brand = higher upside potential
  const maxUplift = 60;
  return Math.round(((100 - scorePercent) / 100) * maxUplift);
}

export function saveAnswersToStorage(answers: ChecklistAnswers): void {
  try {
    localStorage.setItem("hos_checklist_answers", JSON.stringify(answers));
  } catch (e) {
    console.error("Failed to save answers:", e);
  }
}

export function loadAnswersFromStorage(): ChecklistAnswers {
  try {
    const raw = localStorage.getItem("hos_checklist_answers");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Failed to load answers:", e);
    return {};
  }
}

export function clearAnswersFromStorage(): void {
  try {
    localStorage.removeItem("hos_checklist_answers");
  } catch (e) {
    console.error("Failed to clear answers:", e);
  }
}
