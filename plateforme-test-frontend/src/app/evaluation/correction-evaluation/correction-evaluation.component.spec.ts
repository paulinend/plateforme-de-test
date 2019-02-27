import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionEvaluationComponent } from './correction-evaluation.component';

describe('CorrectionEvaluationComponent', () => {
  let component: CorrectionEvaluationComponent;
  let fixture: ComponentFixture<CorrectionEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
