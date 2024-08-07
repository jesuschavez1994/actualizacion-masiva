import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WorflowService } from '../../../core/services/worflow/worflow.service';
import { Card } from '../../../core/models/worflow/worflow.model';

@Component({
  selector: 'app-app-trays',
  templateUrl: './app-trays.component.html',
  styleUrl: './app-trays.component.scss'
})
export class AppTraysComponent {

  
  @Input() cards: Card[] = [];
  isDropdownOpenFather: boolean[] = [];
  dropdownStates: { [key: number]: boolean } = {};


  constructor() {}


  toggleDropdown(index: number): void {
    this.isDropdownOpenFather[index] = !this.isDropdownOpenFather[index]; // Alternar visibilidad del dropdown
  }

  toggleDropdownChild(itemId: number): void {
    // Cierra todos los demás dropdowns
    Object.keys(this.dropdownStates).forEach(key => {
      if (+key !== itemId) {
        this.dropdownStates[+key] = false;
      }
    });
    // Alterna la visibilidad del dropdown actual
    this.dropdownStates[itemId] = !this.dropdownStates[itemId];
  }

  public NavigateTo(ID: number, URL: string){
    const url = `${URL}?id=${ID}`; // La URL a la que deseas redirigir
    window.open(url, '_blank'); // '_blank' abre la URL en una nueva pestaña
  }

  getStatusClass(color: string): string {
    switch (color) {
      case '#D91818':
        return 'red';
      case '#F5A623':
        return 'yellow';
      case '#0000FF':
        return 'blue';
      case '#F059C4':
      return 'analisis';
      case '#30A7DD':
        return 'desarrollo';
      case '#F0B559':
        return 'pruebas'
      default:
        return '';
    }
  }


}
