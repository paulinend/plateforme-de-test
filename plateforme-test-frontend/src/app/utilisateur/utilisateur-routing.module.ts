import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  UserComponent
} from './user/user.component';
import {
  UserFormComponent
} from './user-form/user-form.component';
import {
  UserResolver
} from './user.resolver';

const routes: Routes = [{
    path: '',
    component: UserComponent
  },
  {
    path: 'creer',
    component: UserFormComponent
  },
  {
    path: 'consulter/:id',
    component: UserFormComponent,
    resolve: {
      User: UserResolver
    }
  },
  {
    path: 'editer/:id',
    component: UserFormComponent,
    resolve: {
      User: UserResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class UtilisateurRoutingModule {}
