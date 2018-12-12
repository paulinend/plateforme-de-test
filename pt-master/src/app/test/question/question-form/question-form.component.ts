import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer/answer.service';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { AnswerType } from '../answer/answer-type';
import { concatMap, tap } from 'rxjs/operators';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  form: FormGroup;
  answerTypes: Observable<AnswerType[]>;
  state: string;
  question: Question;
  idTest: any;
  idQuestion: any;

  constructor(
    private _route: ActivatedRoute,
    private _answerService: AnswerService,
    private _formBuilder: FormBuilder,
    private _questionService: QuestionService
  ) {
    this.state = this._route.routeConfig.path;
    console.log('state', this.state);
  }

  ngOnInit() {
    this.initForm();
    this.answerTypes = this._answerService.getAnswerTypes();

    const params$: Observable<any> = this._route.params;
    const parentParams$: Observable<any> = this._route.parent.params;

    if (this.state.includes('creer')) {

    } else if (this.state.includes('editer')) {
      combineLatest(params$, parentParams$).pipe(
        concatMap(([params, parentParams]) => {
          this.idTest = parentParams['id'];
          this.idQuestion = params['id'];
          return this._questionService.getQuestion(+parentParams['id'], +params['id']);
        }),
        tap(question => console.log('editer question', question)),
        tap(question => this.form.patchValue(question))
      ).subscribe(question => this.question = question);
    } else if (this.state.includes('consulter')) {
      combineLatest(params$, parentParams$).pipe(
        concatMap(([params, parentParams]) => this._questionService.getQuestion(+parentParams['id'], +params['id'])),
        tap(question => console.log('consulter question', question)),
        tap(question => this.form.patchValue(question)),
        tap(question => this.form.disable())
      ).subscribe(question => this.question = question);
    }
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      label: ['', Validators.required],
      score: [''],
      enable: '',
      answerType: ['', Validators.required]
    });
  }

  onSubmit(): void {

  }

}
