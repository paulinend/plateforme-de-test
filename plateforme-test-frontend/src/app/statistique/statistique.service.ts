import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistique } from './statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(
    private _http: HttpClient
  ) { }

  getStatistiques(): Observable<Statistique> {
    return this._http.get<Statistique>('assets/mocks/statistique.json');
  }

}
