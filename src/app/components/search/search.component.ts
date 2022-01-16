import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  name=new FormControl('')
 
  @ViewChild('input') inputName:any
  constructor(private teamItemsService:TeamItemsService ) { }

  ngOnInit(): void {
  }
  filterName:string=''
clear(){

}
  searchHero(event:Event){
    event.preventDefault()
    console.log(this.name)
    this.inputName.nativeElement.value = ''
    
  }
}
