import {
  NgModule
} from '@angular/core';
import {
  EvaluationRoutingModule
} from './evaluation-routing.module';
import {
  SharedModule
} from '../shared/shared.module';
import {
  ConsultationEvaluationComponent
} from './consultation-evaluation/consultation-evaluation.component';
import {
  CorrectionEvaluationComponent
} from './correction-evaluation/correction-evaluation.component';
import {
  EvaluationComponent
} from './evaluation/evaluation.component';

@NgModule({
  imports: [
    SharedModule,
    EvaluationRoutingModule,
  ],
  declarations: [
    EvaluationComponent,
    ConsultationEvaluationComponent,
    CorrectionEvaluationComponent,
  ],
  exports: []
})
export class EvaluationModule {}
