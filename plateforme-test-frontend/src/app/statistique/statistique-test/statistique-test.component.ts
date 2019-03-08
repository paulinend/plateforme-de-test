import { Component, OnInit, Input } from '@angular/core';
import { Statistique } from '../statistique';

@Component({
  selector: 'app-statistique-test',
  templateUrl: './statistique-test.component.html',
  styleUrls: ['./statistique-test.component.css']
})
export class StatistiqueTestComponent implements OnInit {

  @Input() stats: Statistique;

  constructor() { }

  ngOnInit() {
  }

}
