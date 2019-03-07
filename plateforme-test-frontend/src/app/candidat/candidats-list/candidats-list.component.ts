import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService
} from 'src/app/utilisateur/user.service';
import {
  Observable
} from 'rxjs';
import {
  User
} from 'src/app/utilisateur/user';

@Component({
  selector: 'app-candidats-list',
  templateUrl: './candidats-list.component.html',
  styleUrls: ['./candidats-list.component.css']
})
export class CandidatsListComponent implements OnInit {
  users$: Observable < User[] > ;

  constructor(
    private _userService: UserService,
  ) {}

  ngOnInit() {
    this.users$ = this._userService.getCandidatesOnly();
  }

  identify(index: number, item: any) {
    return item;
  }
}
