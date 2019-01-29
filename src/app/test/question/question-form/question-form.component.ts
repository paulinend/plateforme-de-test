import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AnswerService } from '../answer/answer.service';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { TypeQuestion } from '../answer/answer-type';
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
  typeQuestions: Observable<TypeQuestion[]>;
  state: string;
  question: Question;
  idTest: number;
  idQuestion: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _answerService: AnswerService,
    private _formBuilder: FormBuilder,
    private _questionService: QuestionService
  ) {
    this.state = this._route.routeConfig.path;
    console.log('state', this.state);
  }

  ngOnInit() {
    this.initForm();
    this.typeQuestions = this._answerService.getTypeQuestions();

    const params$: Observable<any> = this._route.paramMap;
    const parentParams$: Observable<any> = this._route.parent.paramMap;

    if (this.state.includes('creer')) {
      this.idTest = +this._route.parent.snapshot.paramMap.get('id');
      console.log('idTestSnapshot', this.idTest);
    } else if (this.state.includes('editer')) {
      combineLatest(params$, parentParams$).pipe(
        concatMap(([params, parentParams]) => {
          this.idTest = +parentParams.get('id');
          this.idQuestion = +params.get('id');
          return this._questionService.getQuestion(this.idTest, this.idQuestion);
        }),
        tap(question => console.log('editer question', question)),
        tap(question => this.form.patchValue(question))
      ).subscribe(question => this.question = question);
    } else if (this.state.includes('consulter')) {
      combineLatest(params$, parentParams$).pipe(
        concatMap(([params, parentParams]) => {
          this.idTest = +parentParams.get('id');
          this.idQuestion = +params.get('id');
          return this._questionService.getQuestion(this.idTest, this.idQuestion);
        }),
        tap(question => console.log('consulter question', question)),
        tap(question => this.form.patchValue(question)),
        tap(question => this.form.disable())
      ).subscribe(question => this.question = question);
   }

  //  if (this.state.includes('consulter')) {
  //   this.form.disable();
  // }
    // this.state = this._route.routeConfig.path;
    // console.log('state', this.state);
    // this.idTest = +this._route.parent.snapshot.paramMap.get('id');
    // console.log('idTestSnapshot', this.idTest);
    // this.idQuestion = +this._route.snapshot.paramMap.get('id');
    // console.log('idQuestionSnapshot', this.idQuestion);

    // if (this.state.includes('consulter')) {
    //   this.form.disable();
    // }

  }

  initForm(): void {
    this.form = this._formBuilder.group({
      enonce: ['', Validators.required],
      nbPoints: [''],
      enable: '',
      typeQuestion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    let observable$: Observable<any>;
    if (this.state.includes('creer') ) {
      const question = new Question(this.form.value);
      observable$ = this._questionService.addQuestion(this.idTest, question);
      console.log('question', question);
      console.log('id teeeesr', this.idTest);

    } else {
      observable$ = this._questionService.updateQuestion(this.idTest, Object.assign(this.question, this.form.value));
    }
    observable$.subscribe(() => {
      this._router.navigate(['test']);
    });
  }

}
