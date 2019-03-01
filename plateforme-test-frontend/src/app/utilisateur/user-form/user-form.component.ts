import * as core from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  UserService
} from '../user.service';
import {
  User
} from '../user';
import {
  Observable
} from 'rxjs';

@core.Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements core.OnInit {

  form: FormGroup = new FormGroup({});

  profiles: Observable < string[] > ;
  user: User;
  state: string;
  title: string;
  idUser: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
<<<<<<< HEAD
    private _userService: UserService,
=======
    private _userService: UserService
>>>>>>> b9f867a6672ff91c141bcae2534e0c21c100f8c9
  ) {
    this.state = this._route.routeConfig.path;
  }

  ngOnInit() {
    this.initForm();
    this.profiles = this._userService.getUserProfiles();

    this.idUser = this._route.snapshot.params['id'];

    if (this.state.includes('creer')) {
      this.title = 'Ajouter un utilisateur';
    } else if (this.state.includes('editer')) {
      this.title = 'Modifier un utilisateur';
      this._route.data.pipe(
      ).subscribe((data: {
        User: User
      }) => (
        this.user = data.User,
        this.form.patchValue(this.user)
      ));
    } else if (this.state.includes('consulter')) {
      this.title = 'Consulter un utilisateur';
      this._route.data.subscribe((data: {
        User: User
      }) => (
        this.user = data.User,
        this.form.disable(),
        this.form.patchValue(this.user)
      ));
    }
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required],
      profil: '',
      disable: '',
    });
  }

  onSubmit(): void {
    let observable$: Observable < any > ;
    if (this.state.includes('creer')) {
      const user = new User(this.form.value);
      observable$ = this._userService.addUser(user);
    } else {
      observable$ = this._userService.updateUser(Object.assign(this.user, this.form.value));
    }
    observable$.subscribe(() => {
      this._router.navigate(['utilisateur']);
    });
  }
}
