import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatTestModalComponent } from './candidat-test-modal.component';

describe('CandidatTestModalComponent', () => {
  let component: CandidatTestModalComponent;
  let fixture: ComponentFixture<CandidatTestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatTestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatTestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
