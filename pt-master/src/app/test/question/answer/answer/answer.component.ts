import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';
import { Observable } from 'rxjs';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() idTest: number;
  @Input() idQuestion: number;
  @Input() answerType: number;

  answers = [];
  selectedAnswer;

  answers$: Observable<Answer[]>;

  constructor(
    private _answerService: AnswerService
  ) { }


  ngOnInit() {
    this.answers$ = this._answerService.getAnswers(this.idTest, this.idQuestion);
  }

  onSelectionChange(answer) {
    this.selectedAnswer = Object.assign({}, this.selectedAnswer, answer);
  }

}
