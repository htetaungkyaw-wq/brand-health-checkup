export interface ChecklistItem {
  id: string;
  q: string;
  weight: number;
  help: string;
}

export interface ChecklistAnswers {
  [key: string]: boolean;
}

export interface ChecklistResult {
  score: number;
  uplift: number;
  answers: ChecklistAnswers;
  timestamp: string;
}
