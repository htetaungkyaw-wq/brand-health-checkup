export type InputType = 'toggle' | 'slider' | 'devices';

export interface ChecklistItem {
  id: string;
  q: string;
  weight: number;
  help: string;
  inputType: InputType;
  sliderLabels?: { min: string; max: string };
}

export interface ChecklistAnswers {
  [key: string]: boolean | number | string[];
}

export interface ChecklistResult {
  score: number;
  uplift: number;
  answers: ChecklistAnswers;
  timestamp: string;
}
