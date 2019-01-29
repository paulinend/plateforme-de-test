import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { TypeQuestion } from '../answer/answer-type';
import { AnswerService } from '../answer/answer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() idTest: number;
  questions$: Observable<Question[]>;
  typeQuestion$: Observable<TypeQuestion[]>;

  constructor(
    private _router: Router,
    private _questionService: QuestionService,
    private _answerService: AnswerService
  ) { }

  ngOnInit() {
    this.questions$ = this._questionService.getQuestions(this.idTest);
    this.typeQuestion$ = this._answerService.getTypeQuestions();
  }


  deleteQuestion(idTest: number, idQuestion: number): void {
    this._questionService.deleteQuestion(idTest, idQuestion).subscribe(() => {
      this._router.navigate(['test']);
    });
  }

}
