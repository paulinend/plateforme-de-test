import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { AnswerType } from '../answer/answer-type';
import { AnswerService } from '../answer/answer.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() idTest: number;
  questions$: Observable<Question[]>;
  answerTypes$: Observable<AnswerType[]>;

  constructor(
    private _questionService: QuestionService,
    private _answerService: AnswerService
  ) { }

  ngOnInit() {
    this.questions$ = this._questionService.getQuestions(this.idTest);
    this.answerTypes$ = this._answerService.getAnswerTypes();
  }

}
