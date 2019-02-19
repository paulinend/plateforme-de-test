import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { map, catchError, concatMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  profiles : Observable<string[]>;
  // user: Observable<User>;
  user: User;
  state: string;
  title: string;
  idUser: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.state = this._route.routeConfig.path;
    //console.log('state', this.state);
  }

  ngOnInit() {
    this.initForm();    
    this.profiles = this._userService.getUserProfiles();

    this.idUser = this._route.snapshot.params['id'];

    if (this.state.includes('creer')) {
      this.title = 'Ajouter un utilisateur';
    }else if (this.state.includes('editer')){
      this.title = 'Modifier un utilisateur';
      this._route.data.pipe(
        // tap((data : {User : User} )=> this.user = data.User),
        // tap(user => this.form.patchValue(user))
      ).subscribe((data : {User : User} ) => (
          this.user = data.User,
          this.form.patchValue(this.user), 
          console.log(this.user)
        ));
    }else if (this.state.includes('consulter')){
      this.title = 'Consulter un utilisateur';
      this._route.params.pipe(
        concatMap(params => this._userService.getUser(+params['id'])),
        tap(user => this.form.patchValue(user)),
        tap(user => this.form.disable())
      ).subscribe(user => this.user = user);
    }
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required],
      profil : '',
      disable: '',
    });
  }

  onSubmit() {}
}
