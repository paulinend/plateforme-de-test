// export interface Answer {
//   id: number;
//   intitule: string;
//   typeReponse: boolean;
// }

export class Answer {
  id: number;
  intitule: string;
  typeReponse: boolean;

  constructor(answer: {
    id?: number;
    intitule?: string;
    typeReponse?: boolean;
  } = {}) {
    this.id = answer.id || null;
    this.intitule = answer.intitule || '';
    this.typeReponse = answer.typeReponse || false;
  }

}

