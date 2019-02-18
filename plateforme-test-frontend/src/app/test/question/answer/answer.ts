// export interface Answer {
//   id: number;
//   intitule: string;
//   correct: boolean;
// }

export class Answer {
  id: number;
  intitule: string;
  correct: boolean;

  constructor(answer: {
    id?: number;
    intitule?: string;
    correct?: boolean;
  } = {}) {
    this.id = answer.id || null;
    this.intitule = answer.intitule || '';
    this.correct = !!answer.correct;
  }

}

