import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';
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
  arrayVacio:boolean=false
  constructor(private teamItemsService:TeamItemsService) { 
    
  }

  ngOnInit(): void {

    this.listPowerstats= this.teamItemsService.power
    this.appearance=this.teamItemsService.heightWeightHeroes
    this.listHeroTeam=this.teamItemsService.listHeroesTeam
   
    
  }

  ngAfterContentChecked(){
  this.listHeroTeam=this.teamItemsService.listHeroesTeam
 }
}
