import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<Observable<User>> {
  constructor(private _userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot){
    const id = Number(route.paramMap.get('id'))
    console.log(id);
    return this._userService.getUser(id);
  }
}

// @Injectable()
// export class AdminTravelsResolver implements Resolve<Travel[]> {
//   constructor(private travels: TravelService) {}
//   resolve(): Observable<Travel[]> {
//     const userId = <string>route.paramMap.get('userId');
//     // méthode qui récupère via http les voyages de l'utilisateur indiqué
//     return this.travels.getUserTravels(userId);
//   }
// }