// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from '../shared/shared.module';


// Importa otros componentes y módulos necesarios

@NgModule({
  declarations: [
    HomeComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    SharedModule // Asegúrate de agregar RouterModule aquí
    // Otros módulos
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
