import { Component, OnInit } from '@angular/core';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse } from 'src/app/interface/heroResponse';
@Component({
  selector: 'app-team-items',
  templateUrl: './team-items.component.html',
  styleUrls: ['./team-items.component.scss']
})
export class TeamItemsComponent implements OnInit {

  arrayHeroes:HeroResponse[]=[]

  constructor(private teamItemsService:TeamItemsService) { }

  ngOnInit(): void {
   this.getHeroList(6);
  }
  getHeroList(num:number){
    for(let i=1;i<=num;i++){
      this.teamItemsService.getHeroList(i).subscribe((data)=>{
        this.arrayHeroes.push(data)
        
      })
    }
    
  }
}
