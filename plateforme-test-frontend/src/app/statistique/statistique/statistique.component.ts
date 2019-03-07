import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test/test.service';
import { Observable } from 'rxjs';
import { Test } from 'src/app/test/test';
import { FormControl } from '@angular/forms';
import { Statistique } from '../statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  tests$: Observable<Test[]>;
  displayBy = new FormControl('test');
  stats: Statistique;

  constructor(
    private _testService: TestService,
    private _statistiqueService: StatistiqueService
  ) { }

  ngOnInit() {
    this.tests$ = this._testService.getTests();
    this.getStats();
  }

  getStats() {
    this._statistiqueService.getStatistiques().subscribe(
      stats => {
        console.log(stats);
        this.stats = stats;
      });
  }


}
