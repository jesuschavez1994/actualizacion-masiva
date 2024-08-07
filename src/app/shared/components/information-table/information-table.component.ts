import { Component } from '@angular/core';
import { ElementsWithTable } from '../../../core/models/worflow/data-table.model';
import { WorflowService } from '../../../core/services/worflow/worflow.service';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrl: './information-table.component.scss'
})
export class InformationTableComponent {

  items: ElementsWithTable[] = [];

  constructor( private _worflowServices: WorflowService){
    this._worflowServices.getDataTable().subscribe((result: ElementsWithTable[]) => {
      this.items = result;
    })
  }
}
