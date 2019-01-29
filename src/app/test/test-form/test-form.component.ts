import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _router: Router,
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
        // appel en série
        concatMap(params => this._testService.getTest(+params['id'])),
        // action sans modification de la donnée recue (ici, le test) ( ° )( . )
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
      nom: ['', Validators.required],
      duree: ['', Validators.required],
      enable: ''
    });
  }

  onSubmit() {
    let observable$: Observable<any>;
    if (this.state.includes('creer') ) {
      observable$ = this._testService.addTest(this.form.value);
    } else {
      observable$ = this._testService.updateTest(Object.assign(this.test, this.form.value));
      // Object.assign permet d'assigner les nouvelles valeurs modifiée de notre form à notre test.
    }

    observable$.subscribe(() => {
      this._router.navigate(['test']);
    });
  }


}
