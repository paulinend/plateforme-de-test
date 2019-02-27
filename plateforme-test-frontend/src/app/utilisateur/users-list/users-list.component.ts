import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Observable,
  Subscription
} from 'rxjs';
import {
  User
} from '../user';
import {
  UserService
} from '../user.service';

// const trackByFn = (index: number, item: any) => item;

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable < User[] > ;

  constructor(
    private _userService: UserService,
  ) {}

  ngOnInit() {
    this.users$ = this._userService.getUsers();
  }

  identify(index: number, item: any) {
    return item;
  }
}
