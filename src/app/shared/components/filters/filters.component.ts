import { Component, EventEmitter, Output } from '@angular/core';
import { WorflowService } from '../../../core/services/worflow/worflow.service';
import {  Item, ResultWebApi1 } from '../../../core/models/worflow/filters.model';
import { CommunicationService } from '../../../core/services/comunication-with-components/comunication-with-components.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  filters: Item[] = [];
  buttonLabel: string = 'Agregar elemento';
  showButton: boolean = false;
  titleDashboard: string = '';

  constructor(private _worflowServices: WorflowService, private _comunicationWithComponentsServices: CommunicationService) {
    this._worflowServices.getFiltersOptionsWorflowsTrays().subscribe((result: ResultWebApi1) => {
      // Busca la sección de filtros y obtiene sus items
      const filtersSection = result.secciones.find(section => section.seccion.tipo === 'filters');
      if (filtersSection) {
        this.filters = filtersSection.seccion.items;
      }

      const { addButtonLabel, hasAddPermission, hasTableIndicator, titleDashboard } = result.informationTable;
      this.buttonLabel = addButtonLabel || this.buttonLabel;
      this.showButton = hasAddPermission;
      this.titleDashboard = titleDashboard;
      this._comunicationWithComponentsServices.setShowInformationCard(hasTableIndicator);
    });
  }
}
