import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  
  createDb(){
    const heroes = [
      {id: 11, name:'Lion'},
      {id: 12, name:'Axe'},
      {id: 13, name:'Lina'},
      {id: 14, name:'Dazzle'},
      {id: 15, name:'Storm Spirit'},
      {id: 16, name:'Earth Spirit'},
      {id: 17, name:'Ember Spirit'},
      {id: 18, name:'Spirit Breaker'},
      {id: 19, name:'Magnus'},
      {id: 20, name:'Bane'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }


}
