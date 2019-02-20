import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerComponent } from './answer/answer/answer.component';
import { AnswerFormComponent } from './answer/answer-form/answer-form.component';
import { AnswerListComponent } from './answer/answer-list/answer-list.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    QuestionFormComponent,
    QuestionListComponent,
    AnswerComponent,
    AnswerFormComponent,
    AnswerListComponent,
    QuestionComponent
  ],
  exports: [
    QuestionListComponent
  ]
})
export class QuestionModule { }
