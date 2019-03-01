import {
  Test
} from '../test/test';

export interface IEvaluation {
  id: number;
  nom: string;
  prenom: string;
  commentaire: string;
  tests ?: Test[];
}

export class Evaluation implements IEvaluation {
  id: number;
  nom: string;
  prenom: string;
  commentaire: string;
  tests ?: Test[];

  constructor(ctor ?: IEvaluation) {
    this.id = ctor && ctor.id || null;
    this.nom = ctor && ctor.nom || '';
    this.prenom = ctor && ctor.prenom || '';
    this.commentaire = ctor && ctor.commentaire || '';
    this.tests = ctor && ctor.tests;
  }
}
