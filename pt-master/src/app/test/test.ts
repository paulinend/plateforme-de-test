import { Question } from './question/question';

export interface Test {
  id: number;
  title: string;
  duration: number;
  enable:	boolean;
  creationDate:	string;
  lastUpdate:	string;
  questions: Question[];
}
