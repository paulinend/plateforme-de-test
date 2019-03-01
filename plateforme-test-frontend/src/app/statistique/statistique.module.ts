import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiqueComponent } from './statistique/statistique.component';
import { StatistiqueRoutingModule } from './statistique-routing.module';
import { StatistiqueTestComponent } from './statistique-test/statistique-test.component';
import { StatistiqueThemeComponent } from './statistique-theme/statistique-theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StatistiqueRoutingModule
  ],
  declarations: [StatistiqueComponent, StatistiqueTestComponent, StatistiqueThemeComponent]
})
export class StatistiqueModule { }
