import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { FormControl } from '@angular/forms';
import { HeroResponse } from 'src/app/interface/heroResponse';
import { Result } from 'src/app/interface/searchResponse';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from 'src/app/core/items.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {
  nameSearch=new FormControl('')
  heroesList:HeroResponse[]=[]
  arrayHeroes:HeroResponse[]=[]
 private subscription:Subscription[]=[]
  constructor(private teamItemsService:TeamItemsService, private itemsService:ItemsService ) { }

  ngOnInit(): void {
    
    if(sessionStorage.getItem('filtro') !== null){
      let nameLocalStorage=sessionStorage.getItem('filtro')
      this.nameSearch.setValue(nameLocalStorage)
      this.searchHero()
    }else{
      this.getHeroes()
    
    }
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription=> subscription.unsubscribe());
  }
  searchHero(){
   
    this.heroesList=[];
    this.subscription.push(this.teamItemsService.getHeroForName(this.nameSearch.value).subscribe(data=>{
    if(data.response === 'error'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'character with given name not found',
      })
    }else{
      data.results.forEach(el =>{
        this.heroesList.push(el)
      })
      this.arrayHeroes=[]
      sessionStorage.setItem('filtro',this.nameSearch.value)
  
    }
    
   }))
 
}
 
  getHeroes(){
    this.heroesList=this.itemsService.parameters
   
  }
}
