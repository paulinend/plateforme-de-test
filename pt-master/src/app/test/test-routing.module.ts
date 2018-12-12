import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'creer', component: TestFormComponent },
  { path: 'consulter/:id', component: TestFormComponent },
  { path: 'editer/:id', component: TestFormComponent },
  { path: 'editer/:id/question', loadChildren: '../test/question/question.module#QuestionModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
