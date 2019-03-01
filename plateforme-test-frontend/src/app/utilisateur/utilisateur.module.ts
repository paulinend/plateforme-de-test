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
<<<<<<< HEAD
    UserComponent, UserFormComponent],
  exports: [
    UsersListComponent,
    UserComponent, UserFormComponent]
=======
    UserComponent,
    UserFormComponent
  ],
  exports: []
>>>>>>> b9f867a6672ff91c141bcae2534e0c21c100f8c9
})
export class UtilisateurModule {}
