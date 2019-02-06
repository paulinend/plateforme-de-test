import { Component, OnInit, OnDestroy } from '@angular/core';
import { Test } from '../test';
import { Observable, Subscription } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  tests$: Observable<Test[]>;
  test: Test;
  private _deleteTestSubscription: Subscription;

  constructor(
    private _testService: TestService,
  ) {}

  ngOnInit() {
    this.tests$ = this._testService.getTests();
  }

  delete(idTest: number): void {
    this._deleteTestSubscription = this._testService.deleteTest(idTest).subscribe();
  }

  // ngOnDestroy() {
  //   this._deleteTestSubscription.unsubscribe();
  // }


}
