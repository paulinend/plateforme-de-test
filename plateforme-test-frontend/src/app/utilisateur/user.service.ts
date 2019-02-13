import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    //return this._http.get<User[]>('http://localhost:8080/user/liste');
     return this._http.get<User[]>('../../assets/mocks/users.json');
  }

  getUser(idUser: number): Observable<User> {
    // const url = `http://localhost:8080/user/${idUser}`;
    // return this._http.get<User>(url);
    return this._http.get<User[]>('../../assets/mocks/tests.json').pipe(
      map((users: User[]) => users.find(user => user.id === idUser))
    );
  }

  addUser(user: User): Observable<User> {
    return this._http.post<User>('http://localhost:8080/user', user);
  }

  deleteUser(idUser: number) {
    const url = `http://localhost:8080/user/${idUser}`;
    return this._http.delete(url);
  }

  updateUser(user: User) {
    const url = `http://localhost:8080/user/${user.id}`;
    return this._http.put(url, user);
  }
}
