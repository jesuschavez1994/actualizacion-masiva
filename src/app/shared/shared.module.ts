import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { AppInformationCardWithChartComponent } from './components/app-information-card-with-chart/app-information-card-with-chart.component';
import { AppTraysComponent } from './components/app-trays/app-trays.component';
import { InformationTableComponent } from './components/information-table/information-table.component';




@NgModule({
  declarations: [
    TopbarComponent,
    FiltersComponent,
    AppInformationCardWithChartComponent,
    AppTraysComponent,
    InformationTableComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    TopbarComponent,
    FiltersComponent,
    AppInformationCardWithChartComponent,
    AppTraysComponent,
    InformationTableComponent
  ],
})
export class SharedModule {}
