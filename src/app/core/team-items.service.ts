import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { searchResponse } from '../interface/searchResponse';
import { Powerstats } from '../interface/searchResponse';
import { Appearan, HeroResponse } from '../interface/heroResponse';
import { Powers } from '../interface/powerstatsResponse';
import { InfoHeroComponent } from '../components/info-hero/info-hero.component';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TeamItemsService {

  urlBase ='https://superheroapi.com/api/5320557181308017/';
  listHeroesTeam:HeroResponse[]=[]
  ListHeroesTeamSinDuplicado:HeroResponse[]=[]
  contadorBuenos=0
  contadorMalos=0
  power:Powers={
    intelligence:0,
    strength:0,
    speed:0,
    durability:0,
    power:0,
    combat:0
  }
  heightWeightHeroes: Appearan={
    height:0,
    weight:0
  }
  idHero:string=''
  constructor(private http:HttpClient,private router:Router) { }
  
  getHeroForName(name:string):Observable<searchResponse>{
    return this.http.get<searchResponse>(this.urlBase+'search/'+name)
  }
  getPowerstats(idHero:string):Observable<Powerstats>{
    return this.http.get<Powerstats>(this.urlBase+idHero+'/powerstats')
  }

  addTeamItem(idHero:string,arrayHeroes:HeroResponse[]){

    let typeValidation=0
    let heroAddTeam:HeroResponse[]= arrayHeroes.filter(hero => hero.id === idHero)
  
     heroAddTeam.forEach(dataHero=>{
      //evitar duplicados en el Team 
      let index=this.listHeroesTeam.findIndex(el => el.id == idHero)
     
      if(index === -1){
        
      //ver si es un heroe bueno o malo
        dataHero.biography?.alignment ==='good'? this.contadorBuenos=this.contadorBuenos+1 : this.contadorMalos=this.contadorMalos+1
        
        if(this.contadorBuenos >3){
          typeValidation=1
        }else if(this.contadorMalos >3){
          typeValidation=2
        }else{
          this.listHeroesTeam.push(dataHero)
          this.power.combat +=  parseInt(dataHero.powerstats?.combat!)
          this.power.durability +=  parseInt(dataHero.powerstats?.durability!)
          this.power.intelligence+=  parseInt(dataHero.powerstats?.intelligence!)
          this.power.power+=  parseInt(dataHero.powerstats?.power!)
          this.power.speed+=  parseInt(dataHero.powerstats?.speed!)
          this.power.strength+=  parseInt(dataHero.powerstats?.strength!)
          this.heightWeightTeam(dataHero,1)
          localStorage.setItem('HeroTeam',JSON.stringify(this.listHeroesTeam))
        }
        
      }else{
        typeValidation=3
      }
        
    })
 
 return typeValidation
}
   
heightWeightTeam(dataHero:HeroResponse,tipoDeOperacion:number){
 
  let indiceHeight = dataHero.appearance?.height?.[1].indexOf(" ")
   //corta desde 0 hasta el primer espacio de la cadena
  let heightExtraido = dataHero.appearance?.height?.[1].substring(0, indiceHeight)
  let indiceWeight = dataHero.appearance?.weight?.[1].indexOf(" ")
  let weightExtraido = dataHero.appearance?.height?.[1].substring(0, indiceWeight)
  if(tipoDeOperacion ===1){
    this.heightWeightHeroes.height! +=parseInt(heightExtraido!) 
    this.heightWeightHeroes.weight! += parseInt(weightExtraido!)
  }else{
    this.heightWeightHeroes.height! -=parseInt(heightExtraido!) 
    this.heightWeightHeroes.weight! -= parseInt(weightExtraido!)
  }
    
}
deleteHero(idHero:string){
  let newArrayheroes:HeroResponse[]= this.listHeroesTeam.filter(el => el.id !==idHero)
  let heroEliminado:HeroResponse[]=this.listHeroesTeam.filter(el => el.id === idHero)
  heroEliminado.forEach(dataHero=>{
      
    this.power.combat -=  parseInt(dataHero.powerstats?.combat!)
    this.power.durability -=  parseInt(dataHero.powerstats?.durability!)
    this.power.intelligence-=  parseInt(dataHero.powerstats?.intelligence!)
    this.power.power-=  parseInt(dataHero.powerstats?.power!)
    this.power.speed-=  parseInt(dataHero.powerstats?.speed!)
    this.power.strength-=  parseInt(dataHero.powerstats?.strength!)
    this.heightWeightTeam(dataHero,2)
  })
  
 return this.listHeroesTeam = newArrayheroes
}

InfoHero(idHero:string){
  this.idHero=idHero
  console.log(this.idHero)
}
}
