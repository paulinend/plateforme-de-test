import { Answer } from './answer/answer';

// export interface Question {
//   id: number;
//   enonce: string;
//   enable: boolean;
//   reponses: Answer[];
//   typeQuestion: string;
// }

export class Question {
   id: number;
   enonce: string;
   nbPoints: number;
   enabled: boolean;
   typeQuestion: string;

  constructor(question: {
    id?: number;
    enonce?: string;
    nbPoints?: number;
    enabled?: boolean;
    typeQuestion?: string;
  } = {}) {
    this.id = question.id || null;
    this.enonce = question.enonce || '';
    this.nbPoints = question.nbPoints || 1;
    this.enabled = question.enabled || true;
    this.typeQuestion = question.typeQuestion || '';
  }

}
