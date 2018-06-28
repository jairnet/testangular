import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
      .pipe(
        map(() => {
          return [
            {
              chef: 'Jair', date: new Date(),
              img: 'http://www.pqs.pe/sites/default/files/styles/852x479/public/2017/07/actualidad/pqs-negocio-de-comidas.jpg?itok=5y9amxW9'
            },
            {
              chef: 'Jairo', date: new Date(),
              img: 'http://cndchavetas-chavetas.netdna-ssl.com/albums/cuba08/comidacubana05.jpg'
            },
            {
              chef: 'Juan', date: new Date(),
              img: 'http://culturizando.com/wp-content/uploads/2018/05/thumb_600x0_pabellon-venezolano.png'
            },
            {
              chef: 'Jose', date: new Date(),
              img: 'http://culturizando.com/wp-content/uploads/2018/05/thumb_600x0_pabellon-venezolano.png'
            },
            {
              chef: 'Javier', date: new Date(),
              img: 'http://alo.co/sites/default/files/imagecache/Miniatura_300_300/tacos_0.jpg'
            },
          ];
        })
      );
  }
}

export class Menu {
  constructor(public img: string,
    public chef: string,
    public date: Date) { }
}
