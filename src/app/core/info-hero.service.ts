import { Injectable } from '@angular/core';
import { HeroResponse } from '../interface/heroResponse';

@Injectable({
  providedIn: 'root'
})
export class InfoHeroService {
  infoHero:HeroResponse={}
  constructor() { }

  getInfoHero(idHero:string){
    
  }
}
