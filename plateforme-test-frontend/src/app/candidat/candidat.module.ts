import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  CandidatRoutingModule
} from './candidat-routing.module';
import {
  CandidatsListComponent
} from './candidats-list/candidats-list.component';
import {
  CandidatComponent
} from './candidat/candidat.component';
import {
  CandidatFormComponent
} from './candidat-form/candidat-form.component';
import { CandidatTestComponent } from './candidat-test/candidat-test.component';
import { CandidatTestModalComponent } from './candidat-test-modal/candidat-test-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CandidatRoutingModule
  ],
  declarations: [
    CandidatComponent,
    CandidatsListComponent,
    CandidatFormComponent,
    CandidatTestComponent,
    CandidatTestModalComponent
  ],
  // exports: [CandidatsListComponent]
})
export class CandidatModule {}
