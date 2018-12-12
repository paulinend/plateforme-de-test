import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
import { concatMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Test } from '../test';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  // test$: Observable<Test>;
  test: Test;
  state: string;
  title: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _testService: TestService
  ) {
    this.state = this._route.routeConfig.path;
  }

  ngOnInit() {
    this.initForm();
    if (this.state.includes('creer')) {
      this.title = 'Ajouter un test';
    } else if (this.state.includes('editer')) {
      this.title = 'Modifier un test';
      this._route.params.pipe(
        concatMap(params => this._testService.getTest(+params['id'])),
        tap(test => this.form.patchValue(test))
      ).subscribe(test => this.test = test);
    } else if (this.state.includes('consulter')) {
      this.title = 'Consulter un test';
      this._route.params.pipe(
        concatMap(params => this._testService.getTest(+params['id'])),
        tap(test => this.form.patchValue(test)),
        tap(test => this.form.disable())
      ).subscribe(test => this.test = test);
    }
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      duration: ['', Validators.required],
      enable: ''
    });
  }

  onSubmit() {
  }

}
