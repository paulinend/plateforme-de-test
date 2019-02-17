import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  @Input()
  answers: Answer[];
  // Un event qui va emettre une valeur de type Answer
  @Output()
  answerDeleted: EventEmitter<Answer> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onDelete(answer: Answer) {
    this.answerDeleted.emit(answer);
  }

}
