import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  user: User;
  state: string;
  title: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
  ) { 
    this.state = this._route.routeConfig.path;
  }

  ngOnInit() {
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required],
      profil : '',
      enable: ''
    });
  }
}
