import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

@Component({
  // La etiqueta para usar el componete
  selector: 'app-root',
  // la ruta del archivo del template
  templateUrl: './app.component.html',
  // las rutas de los archivos de estilos
  styleUrls: ['./app.component.css'],
  // servicios aprtir de este nivel
  // Template del componete
  // template:'<p>Hola</p>'
})
export class AppComponent {
  title = 'Jair';
  data: Menu[] = [];

  constructor(service: MenuService) {
    service.loadMenu()
      .subscribe(x => this.data = x);
  }
}
