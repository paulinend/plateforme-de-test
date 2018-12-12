import { Answer } from './answer/answer';
import { AnswerType } from './answer/answer-type';

export interface Question {
  id: number;
  label: string;
  enable: boolean;
  answsers: Answer[];
  answerType: number;
}
