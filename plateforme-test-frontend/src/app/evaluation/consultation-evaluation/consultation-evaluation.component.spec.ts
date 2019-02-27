import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationEvaluationComponent } from './consultation-evaluation.component';

describe('ConsultationEvaluationComponent', () => {
  let component: ConsultationEvaluationComponent;
  let fixture: ComponentFixture<ConsultationEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
