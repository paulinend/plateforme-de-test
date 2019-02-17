import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  form: FormGroup;

  @Output()
  answerAdded: EventEmitter<Answer> = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      label: ['', Validators.required],
      isCorrect: false

    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const answser: Answer = new Answer(this.form.value);
    this.answerAdded.emit(answser);
  }

}
