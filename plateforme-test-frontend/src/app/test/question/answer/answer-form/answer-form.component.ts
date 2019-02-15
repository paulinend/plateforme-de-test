import { Component, OnInit, Input } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  @Input() idTest: number;
  @Input() idQuestion: number;
  form: FormGroup;

  constructor(
    private _answerService: AnswerService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      intitule: ['', Validators.required],
      typeReponse: ['', Validators.required]

    });
  }

  onSubmit(): void {
    console.log('form', this.form.value);
    let observable$: Observable<any>;
    const answer = new Answer(this.form.value);
    observable$ = this._answerService.addAnswer(this.idTest, this.idQuestion, answer);

    observable$.subscribe(() => {
      this._router.navigate(['test']);
      console.log('REPONSE AJOUTEE AVEC SUCCEE');
    });
  }

}
