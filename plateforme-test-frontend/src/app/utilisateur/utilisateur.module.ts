import {
  NgModule
} from '@angular/core';
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
import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
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
