import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  { path: 'creer', component: QuestionFormComponent },
  { path: 'editer/:id', component: QuestionFormComponent },
  { path: 'consulter/:id', component: QuestionFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
