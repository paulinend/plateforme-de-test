import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  UtilisateurRoutingModule
} from './utilisateur-routing.module';
import {
  UsersListComponent
} from './users-list/users-list.component';
import {
  UserComponent
} from './user/user.component';
import {
  UserFormComponent
} from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilisateurRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UserComponent,
    UserFormComponent
  ],
  exports: []
})
export class UtilisateurModule {}
