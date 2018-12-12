import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private _http: HttpClient
  ) { }

  getTests(): Observable<Test[]> {
    return this._http.get<Test[]>('../../assets/mocks/tests.json');
  }

  getTest(id: number): Observable<Test> {
    return this._http.get<Test[]>('../../assets/mocks/tests.json').pipe(
      map(tests => tests.find(test => test.id === id))
    );
  }

}
