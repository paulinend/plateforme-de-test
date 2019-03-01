import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  CandidatComponent
} from './candidat/candidat.component';
import {
  CandidatFormComponent
} from './candidat-form/candidat-form.component';

const routes: Routes = [{
    path: '',
    component: CandidatComponent
  },
  {
    // path: 'consulter/:id',
    path: 'consulter',
    component: CandidatFormComponent,
    // resolve: {
    //   User: CandidatResolver
    // }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule {}
