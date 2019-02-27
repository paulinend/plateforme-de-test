import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CandidatTest } from '../candidat-test';

@Component({
  selector: 'app-candidat-test',
  templateUrl: './candidat-test.component.html',
  styleUrls: ['./candidat-test.component.css']
})
export class CandidatTestComponent {
  @Input() candidatTest: CandidatTest[] = [];
  // @Output() select = new EventEmitter();

  // heading = 'Candidats';

  // selectCandidat(candidat: Candidat) {
  //   this.select.emit(candidat);
  // }
}
