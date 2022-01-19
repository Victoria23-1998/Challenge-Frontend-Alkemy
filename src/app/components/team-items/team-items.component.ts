import { Component, OnInit,DoCheck } from '@angular/core';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse } from 'src/app/interface/heroResponse';

@Component({
  selector: 'app-team-items',
  templateUrl: './team-items.component.html',
  styleUrls: ['./team-items.component.scss']
})
export class TeamItemsComponent implements OnInit, DoCheck {

  listTeamHeroes:HeroResponse[]=[]

  constructor(public teamItemsService:TeamItemsService) { 
    this.teamItemsService.listHeroesTeam
  }

  ngOnInit(): void {
    
  }
  
ngDoCheck(){
 
}
}
