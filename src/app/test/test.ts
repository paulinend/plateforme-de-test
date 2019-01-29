import { Question } from './question/question';

export interface Test {
  id: number;
  nom: string;
  duree: number;
  enable:	boolean;
  dateCreation?:	string;
  dateModification?:	string;
  questions?: Question[];
}
