import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answers$: BehaviorSubject<Answer[]> = new BehaviorSubject([]);
  testId: number;
  questionId: number;

  constructor(
    private _route: ActivatedRoute,
    private _answerService: AnswerService
  ) {
    this.testId = +this._route.parent.snapshot.paramMap.get('id');
    this.questionId = +this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this._answerService.getAnswers(this.testId, this.questionId).subscribe(
      (answers: Answer[]) => this.answers$.next(answers)
    );
  }

  addAnwser(answer: Answer) {
    this._answerService.addAnswer(this.testId, this.questionId, answer).subscribe(
      (anwserId: number) => {
        answer.id = anwserId; // tant que le backend ne renvoit pas l'id de la ressource créée ça ne marchera pas
        this.answers$.next([...this.answers$.getValue(), answer]);
      }
    );
  }

  deleteAnswer(deletedAnswer: Answer) {
    this._answerService.deleteAnswer(this.testId, this.questionId, deletedAnswer.id).subscribe(
      () => {
        const answers = this.answers$.getValue();
        const index = answers.findIndex(answer => answer.id === deletedAnswer.id);
        answers.splice(index, 1)
        this.answers$.next(answers);
      }
    );
  }

}
