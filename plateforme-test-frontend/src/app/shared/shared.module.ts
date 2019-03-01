import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

@NgModule({
  imports: SharedModule.MODULE_LIST,
  declarations: [],
  exports: SharedModule.MODULE_LIST
})
export class SharedModule {
  static readonly MODULE_LIST = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ];
}
