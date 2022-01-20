import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse } from 'src/app/interface/heroResponse';

@Component({
  selector: 'app-team-items',
  templateUrl: './team-items.component.html',
  styleUrls: ['./team-items.component.scss']
})
export class TeamItemsComponent implements OnInit {

  listTeamHeroes:HeroResponse[]=[]

  constructor(public teamItemsService:TeamItemsService,private router:Router) { 
    this.listTeamHeroes=this.teamItemsService.listHeroesTeam

  }

  ngOnInit(): void {
    //this.listTeamHeroes = JSON.parse(localStorage.getItem('HeroTeam')||'')
    this.listTeamHeroes=this.teamItemsService.listHeroesTeam
  }
  
deleteHero(idHero:string){
  this.listTeamHeroes=this.teamItemsService.deleteHero(idHero)
}
infoHero(idHero:string){
  this.teamItemsService.InfoHero(idHero)
  this.router.navigate(['/info']);
}
}
