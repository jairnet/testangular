import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeekService {

  constructor() { }

  loadWeek(): Observable<Day[]> {
    return timer(500)
    .pipe(
      map(() => [
        {chef: 'Jair', menu: ['Pizza', 'ShopSuy', 'Tacos']},
        {chef: 'Jair', menu: ['Tacos']},
        {chef: 'Jair', menu: ['Pizza', 'ShopSuy', 'Tacos']},
        {chef: 'Jair', menu: ['ShopSuy', 'Tacos']},
        {chef: 'Jair', menu: ['Pizza', 'ShopSuy', 'Tacos']},
      ])
    );
  }
}

export class Day{
  constructor(public chef: string, public menu:string[]){}
}