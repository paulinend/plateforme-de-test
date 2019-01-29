import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestFormComponent } from './test-form/test-form.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './question/answer/answer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestRoutingModule,
    QuestionModule,
    AnswerModule
  ],
  declarations: [
    TestFormComponent,
    TestListComponent,
    TestComponent
  ]
})
export class TestModule { }
