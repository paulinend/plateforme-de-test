import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './test';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private _http: HttpClient
  ) { }

  getTests(): Observable<Test[]> {
    return this._http.get<Test[]>('http://localhost:8080/test/liste');
    // return this._http.get<Test[]>('../../assets/mocks/tests.json');
  }

  getTest(idTest: number): Observable<Test> {
    const url = `http://localhost:8080/test/${idTest}`;
    return this._http.get<Test>(url);
    // return this._http.get<Test[]>('../../assets/mocks/tests.json').pipe(
    //   map((tests: Test[]) => tests.find(test => test.id === idTest))
    // );
  }

  addTest(test: Test): Observable<Test> {
    return this._http.post<Test>('http://localhost:8080/test', test);
  }

  deleteTest(idTest: number) {
    const url = `http://localhost:8080/test/${idTest}`;
    return this._http.delete(url);
  }

  updateTest(test: Test) {
    const url = `http://localhost:8080/test/${test.id}`;
    return this._http.put(url, test);
  }

}
