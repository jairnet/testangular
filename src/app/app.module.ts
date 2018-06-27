import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
@NgModule({
  // componests, pipes o directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent
  ],
  // Importamos Modulos
  imports: [
    BrowserModule
  ],
  // Servicios (singlenton) disponibles en el modulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent]
})
// esoecifica que componentes, servicios o pipes se exportan
export class AppModule { }
