import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http: HttpClient
  ) { }

  getQuestions(idTest: number): Observable<Question[]> {
    return this._http.get<Question[]>('../../../assets/mocks/questions.json');
  }

  getQuestion(idTest: number, idQuestion: number): Observable<Question> {
    return this._http.get<Question[]>('../../../assets/mocks/questions.json').pipe(
      map(questions => questions.find(question => question.id === idQuestion))
    );
  }

}
