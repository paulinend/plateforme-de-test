import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeQuestion } from './answer-type';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private _http: HttpClient
  ) { }

    getTypeQuestions(): Observable<TypeQuestion[]> {
      return this._http.get<TypeQuestion[]>('../../../../assets/mocks/answer-types.json');
    }

    getAnswers(idTest: number, idQuestion: number): Observable<Answer[]> {
      const url = `${'http://localhost:8080/test'}/${idTest}/question/${idQuestion}/reponse/liste`;
      return this._http.get<Answer[]>(url);
    }

    addAnswer(idTest: number, idQuestion: number, answer: Answer) {
      const url = `${'http://localhost:8080/test'}/${idTest}/question/${idQuestion}/reponse`;
      return this._http.post(url, answer);
    }

    updateAnswer(idTest: number, idQuestion: number, answer: Answer) {
      const url = `http://localhost:8080/test/${idTest}/question/${idQuestion}/reponse/${answer.id}`;
      return this._http.put(url, answer);
    }

    deleteAnswer(idTest: number, idQuestion: number, idAnswer: number): Observable<Answer> {
      const url = `http://localhost:8080/test/${idTest}/question/${idQuestion}/reponse/${idAnswer}`;
      return this._http.delete<Answer>(url);
    }


}
