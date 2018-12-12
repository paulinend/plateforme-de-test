import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  tests$: Observable<Test[]>;
  test: Test[];

  constructor(
    private _testService: TestService,
  ) {}

  ngOnInit() {
    this.tests$ = this._testService.getTests();
  }

}
