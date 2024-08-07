import { Component, Input, input } from '@angular/core';
import { Card } from '../../../core/models/worflow/worflow.model';

@Component({
  selector: 'app-app-information-card-with-chart',
  templateUrl: './app-information-card-with-chart.component.html',
  styleUrl: './app-information-card-with-chart.component.scss'
})
export class AppInformationCardWithChartComponent {
  @Input() cards: Card[] = [];
}
