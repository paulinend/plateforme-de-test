import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private _userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<User> {
    const id = Number(route.paramMap.get('id'))
    //console.log(id);
    return this._userService.getUser(id).take(1);
  }
}
