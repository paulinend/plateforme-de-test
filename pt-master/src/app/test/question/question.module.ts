import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerComponent } from './answer/answer/answer.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuestionFormComponent,
    QuestionListComponent,
    AnswerComponent
  ],
  exports: [
    QuestionListComponent
  ]
})
export class QuestionModule { }
