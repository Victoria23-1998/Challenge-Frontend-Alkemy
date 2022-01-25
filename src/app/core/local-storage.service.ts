import { Injectable } from '@angular/core';
import { HeroResponse } from '../interface/heroResponse';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  listTeamHeroes:HeroResponse[]=[]
  constructor() { }
  
  getLocalTeam(){
    console.log(JSON.parse(localStorage.getItem('HeroTeam')||''))
    return JSON.parse(localStorage.getItem('HeroTeam')||'')
  }
  
}
