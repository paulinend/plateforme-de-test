import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueTestComponent } from './statistique-test.component';

describe('StatistiqueTestComponent', () => {
  let component: StatistiqueTestComponent;
  let fixture: ComponentFixture<StatistiqueTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
