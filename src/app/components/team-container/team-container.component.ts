import { Component, OnInit } from '@angular/core';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { Appearan, HeroResponse } from 'src/app/interface/heroResponse';
import { Powers } from 'src/app/interface/powerstatsResponse';
@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {
  listHeroTeam:HeroResponse[]=[]
  listPowerstats:Powers={} as Powers
  appearance:Appearan={}
  constructor(private teamItemsService:TeamItemsService) { 
    
  }

  ngOnInit(): void {

    this.listPowerstats= this.teamItemsService.power
    this.appearance=this.teamItemsService.heightWeightHeroes
  }
  ngDoCheck(){
    this.listHeroTeam=this.teamItemsService.listHeroesTeam
    this.listPowerstats= this.teamItemsService.power
  }
}
