import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueThemeComponent } from './statistique-theme.component';

describe('StatistiqueThemeComponent', () => {
  let component: StatistiqueThemeComponent;
  let fixture: ComponentFixture<StatistiqueThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
