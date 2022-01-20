import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse, InfoHero } from 'src/app/interface/heroResponse';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.scss']
})
export class InfoHeroComponent implements OnInit {
  infoHero:InfoHero={
    
    Height:'',
    Weight:'0',
    Aliases:'',
    "Eye-Color":'',
    "Hair-Color":'',
    "Work-Occupation":''
  }
  nameHero:string=''
  imgHero:string=''
  hero:HeroResponse[]=[]
  constructor(public teamItemsService:TeamItemsService,private router:Router) { }

  ngOnInit(): void {
    this.hero =this.teamItemsService.listHeroesTeam.filter(hero => hero.id ===
    this.teamItemsService.idHero)
    
      this.hero.forEach(el=>{
      this.nameHero=el.name!
      this.imgHero=el.image?.url!
       this.infoHero.Height= el.appearance?.height?.[1]!
       this.infoHero.Weight= el.appearance?.weight?.[1]!
       this.infoHero.Aliases= el.biography?.aliases?.[0]!
       this.infoHero['Eye-Color']= el.appearance?.['eye-color']!
       this.infoHero['Hair-Color']= el.appearance?.['hair-color']!
       this.infoHero['Work-Occupation']=el.work?.occupation!
    })
    
  }
back(){
  this.router.navigate(['/home']);
}
}
