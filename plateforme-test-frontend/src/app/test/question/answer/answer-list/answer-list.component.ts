import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';
import { Observable } from 'rxjs';
import { Answer } from '../answer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  @Input() idTest: number;
  @Input() idQuestion: number;
  @Input() typeQuestion: number;

  form: FormGroup;
  answers = [];
  selectedAnswer;
  closeResult: string;

  answers$: Observable<Answer[]>;

  constructor(
    private _answerService: AnswerService,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }


  ngOnInit() {
    this.initForm();
    this.answers$ = this._answerService.getAnswers(this.idTest, this.idQuestion);
  }

  onSelectionChange(answer) {
    this.selectedAnswer = Object.assign({}, this.selectedAnswer, answer);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      intitule: ['', Validators.required],
      correct: [false, Validators.required]

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

  deleteAnswer(idTest: number, idQuestion: number, idAnswer: number): void {
    this._answerService.deleteAnswer(idTest, idQuestion, idAnswer).subscribe(() => {
      this._router.navigate(['test']);
      console.log('SUUUPRIMER');
    });
  }

}
