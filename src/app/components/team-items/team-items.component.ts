import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse } from 'src/app/interface/heroResponse';

@Component({
  selector: 'app-team-items',
  templateUrl: './team-items.component.html',
  styleUrls: ['./team-items.component.scss']
})
export class TeamItemsComponent implements OnInit {

  listTeamHeroes:HeroResponse[]=[]

  constructor(public teamItemsService:TeamItemsService,private router:Router,private localStorageService :LocalStorageService) { 
    

  }

  ngOnInit(): void {
   
    this.listTeamHeroes=this.teamItemsService.listHeroesTeam
    
  }

  


deleteHero(idHero:string){
  this.listTeamHeroes=this.teamItemsService.deleteHero(idHero)
  //this.teamItemsService.deleteHeroLocal(idHero)
}
infoHero(idHero:string){
  this.teamItemsService.InfoHero(idHero)
  this.router.navigate(['/info']);
}
}
