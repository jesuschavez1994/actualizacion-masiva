import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../../models/worflow/worflow.model';
import data from '../../../../assets/data/data-worflow.json';
import filtersOpts from '../../../../assets/data/filters-worflow.json';
import dataTable from '../../../../assets/data/data-table.json';
import { ResultWebApi1 } from '../../models/worflow/filters.model';
import { ElementsWithTable } from '../../models/worflow/data-table.model';

@Injectable({
  providedIn: 'root'
})
export class WorflowService {

  

  constructor(protected http: HttpClient) { }

  public getInformationWorflowsTrays(worflowId?: number, userId?: number): Observable<Card[]> {
    return of(data.cards); 
  }

  public getFiltersOptionsWorflowsTrays(worflowId?: number, userId?: number): Observable<ResultWebApi1>{
    return of(filtersOpts);
  }

  public getDataTable(): Observable<ElementsWithTable[]>{
    return of(dataTable);
  }

}
