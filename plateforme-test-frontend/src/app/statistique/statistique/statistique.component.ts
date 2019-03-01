import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test/test.service';
import { Observable } from 'rxjs';
import { Test } from 'src/app/test/test';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  tests$: Observable<Test[]>;
  displayBy = new FormControl('test');

  constructor(
    private _testService: TestService,
  ) { }

  ngOnInit() {
    this.tests$ = this._testService.getTests();
  }

}
