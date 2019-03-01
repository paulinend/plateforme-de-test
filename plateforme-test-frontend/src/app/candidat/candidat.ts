import {
  User
} from '../utilisateur/user';
import {
  CandidatTest
} from './candidat-test';

export interface ICandidat {
  id: number;
  user: User;
  tests?: CandidatTest[];
}

export class Candidat extends User implements ICandidat {
  id: number;
  user: User;
  tests?: CandidatTest[];

  constructor(ctor ?: Candidat) {
    super();
    this.id = ctor && ctor.id || null;
    this.user = ctor && ctor.user || null;
    this.tests = ctor && ctor.tests;
  }
}
