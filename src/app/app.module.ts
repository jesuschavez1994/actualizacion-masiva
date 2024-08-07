// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// Importa otros componentes y módulos necesarios

@NgModule({
  declarations: [
    AppComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
