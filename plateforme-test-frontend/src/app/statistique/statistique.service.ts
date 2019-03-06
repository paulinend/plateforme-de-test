import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../test/test';
import { Statistique } from './statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(
    private _http: HttpClient
  ) { }

  getTests(): Observable<Test[]> {
    return this._http.get<Test[]>('http://localhost:8080/test/liste');
    //  return this._http.get<Test[]>('../../assets/mocks/tests.json');
  }

  getStatistiques(): Observable<Statistique[]> {
    return this._http.get<Statistique[]>('../../assets/mocks/statistique.json');
  }

}
