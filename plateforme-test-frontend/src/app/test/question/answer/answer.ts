// export interface Answer {
//   id: number;
//   label: string;
//   isCorrect: boolean;
// }

export class Answer {
  id: number;
  label: string;
  isCorrect: boolean;

  constructor(answer: {
    id?: number;
    label?: string;
    isCorrect?: boolean;
  } = {}) {
    this.id = answer.id || null;
    this.label = answer.label || '';
    this.isCorrect = !!answer.isCorrect;
  }

}

