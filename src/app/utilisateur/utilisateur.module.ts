import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    UtilisateurRoutingModule
  ],
  declarations: [
    UsersListComponent, 
    UserComponent, UserFormComponent],
  exports: [
    UsersListComponent, 
    UserComponent, UserFormComponent]
})
export class UtilisateurModule { }
