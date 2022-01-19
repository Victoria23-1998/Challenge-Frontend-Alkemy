import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { searchResponse } from '../interface/searchResponse';
import { Powerstats } from '../interface/searchResponse';
import { HeroResponse } from '../interface/heroResponse';
import { Powers } from '../interface/powerstatsResponse';
@Injectable({
  providedIn: 'root'
})
export class TeamItemsService {

  urlBase ='https://superheroapi.com/api/5320557181308017/';
  listHeroesTeam:HeroResponse[]=[]
 
  power:Powers={
    intelligence:0,
    strength:0,
    speed:0,
    durability:0,
    power:0,
    combat:0
  }
  constructor(private http:HttpClient) { }
  
  getHeroForName(name:string):Observable<searchResponse>{
    return this.http.get<searchResponse>(this.urlBase+'search/'+name)
  }
  getPowerstats(idHero:string):Observable<Powerstats>{
    return this.http.get<Powerstats>(this.urlBase+idHero+'/powerstats')
  }

  getTeam(idHero:string,arrayHeroes:HeroResponse[]){
    
    let heroAddTeam:HeroResponse[]= arrayHeroes.filter(hero => hero.id === idHero) 
    heroAddTeam.forEach(dataHero=>{
      this.listHeroesTeam.push(dataHero)

      this.power.combat +=  parseInt(dataHero.powerstats?.combat || '')
      this.power.durability +=  parseInt(dataHero.powerstats?.durability || '')
      this.power.intelligence+=  parseInt(dataHero.powerstats?.intelligence || '')
      this.power.power+=  parseInt(dataHero.powerstats?.power || '')
      this.power.speed+=  parseInt(dataHero.powerstats?.speed || '')
      this.power.strength+=  parseInt(dataHero.powerstats?.strength || '')
    })
    
    
    console.log(this.power)
  }
}
