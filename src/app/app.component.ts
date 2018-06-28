import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';
import { finalize } from 'rxjs/operators';

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
  loading = false;

  constructor(service: MenuService) {
    this.loading = true;
    service.loadMenu()
    .pipe(
      finalize(() => this.loading = false)
      )
      .subscribe(x => this.data = x, err => console.log(err));
  }
  showName(menu: Menu) {
    alert(menu.chef);
  }
}
