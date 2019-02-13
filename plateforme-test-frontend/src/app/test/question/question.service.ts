import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Test } from '../test';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http: HttpClient
  ) { }

  getQuestions(idTest: number): Observable<Question[]> {
    // const url = `http://localhost:8080/test/${idTest}/question/liste`;
    // return this._http.get<Question[]>(url);
    return this._http.get<Test[]>('../../assets/mocks/tests.json').pipe(
      map((tests: Test[]) => tests.find(test => test.id === idTest).questions)
    );
  }

  getQuestion(idTest: number, idQuestion: number): Observable<Question> {
    const url = `http://localhost:8080/test/${idTest}/question/${idQuestion}`;
    return this._http.get<Question>(url);
  }

  updateQuestion(idTest: number, question: Question) {
    const url = `http://localhost:8080/test/${idTest}/question/${question.id}`;
    return this._http.put(url, question);
  }

  deleteQuestion(idTest: number, idQuestion: number): Observable<Question> {
    const url = `http://localhost:8080/test/${idTest}/question/${idQuestion}`;
    return this._http.delete<Question>(url);
  }
  addQuestion(idTest: number, question: Question) {
    const url = `http://localhost:8080/test/${idTest}/question`;
    return this._http.post(url, question);
  }

}
