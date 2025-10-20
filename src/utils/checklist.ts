import { ChecklistAnswers } from "@/types/checklist";
import { CHECKLIST_ITEMS } from "@/data/checklist";

export function calculateScore(answers: ChecklistAnswers): number {
  const totalWeight = CHECKLIST_ITEMS.reduce((sum, item) => sum + item.weight, 0);
  const achievedWeight = CHECKLIST_ITEMS.reduce((sum, item) => {
    const answer = answers[item.id];
    const item_score = 
      typeof answer === 'boolean' ? (answer ? item.weight : 0) :
      typeof answer === 'number' ? (answer / 100) * item.weight :
      Array.isArray(answer) ? (answer.length > 0 ? item.weight : 0) :
      0;
    return sum + item_score;
  }, 0);
  
  return Math.round((achievedWeight / totalWeight) * 100);
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
