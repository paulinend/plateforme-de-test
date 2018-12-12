import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerType } from './answer-type';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private _http: HttpClient
  ) { }

    getAnswerTypes(): Observable<AnswerType[]> {
      return this._http.get<AnswerType[]>('../../../../assets/mocks/answer-types.json');
    }

    getAnswers(idTest: number, idQuestion: number): Observable<Answer[]> {
      return this._http.get<Answer[]>('../../../../assets/mocks/answers.json');
    }

}
