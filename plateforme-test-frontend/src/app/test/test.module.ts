import {
  NgModule
} from '@angular/core';
import {
  TestRoutingModule
} from './test-routing.module';
import {
  TestFormComponent
} from './test-form/test-form.component';
import {
  TestListComponent
} from './test-list/test-list.component';
import {
  TestComponent
} from './test/test.component';
import {
  QuestionModule
} from './question/question.module';
import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TestRoutingModule,
    QuestionModule
  ],
  declarations: [
    TestFormComponent,
    TestListComponent,
    TestComponent
  ],
  exports: []
})
export class TestModule {}
