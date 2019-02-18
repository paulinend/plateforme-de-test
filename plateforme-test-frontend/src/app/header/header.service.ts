import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../utilisateur/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private _http: HttpClient
  ) { }

  getUser(idUser: number): Observable<User> {
    return this._http.get<User[]>('../../assets/mocks/tests.json').pipe(
      map((users: User[]) => users.find(user => user.id === idUser))
    );
  }

}
