import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Powerstats } from 'src/app/interface/heroResponse';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse } from 'src/app/interface/heroResponse';
import { Result } from 'src/app/interface/searchResponse';
import { Powers } from 'src/app/interface/powerstatsResponse';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-wanted-items',
  templateUrl: './wanted-items.component.html',
  styleUrls: ['./wanted-items.component.scss']
})
export class WantedItemsComponent implements OnInit {

  //@Input()listHeroesSearch:Result[]=[]
  @Input() public listHeoresGet:HeroResponse[]=[]
  closeResult = '';

  power:Powers={
    intelligence:0,
    strength:0,
    speed:0,
    durability:0,
    power:0,
    combat:0
  }
  listPowerstats:Powers[]=[]
  listHeroesTeam:HeroResponse[]=[]
  idHero:string=''
  
  constructor(private modalService: NgbModal, private teamItemsService:TeamItemsService) { }

  ngOnInit(): void {}
  //abre el modal
  open(content:any) {
    this.modalService.open(content,{ centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.idHero=''
      this.power={} as Powers
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //cierra el modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     
      return 'by clicking on a backdrop';
    } else {
      
      return `with: ${reason}`;
      
    }
  }
  powersOrdenados:any={} as any

  searchPowerstats(idHero:string,content:any){
    this.power={} as Powers
    this.open(content)
    this.idHero=idHero
    this.teamItemsService.getPowerstats(idHero).subscribe(data =>{
      
      this.power.combat=parseInt(data.combat);
      this.power.durability=parseInt(data.durability);
      this.power.intelligence=parseInt(data.intelligence);
      this.power.power=parseInt(data.power);
      this.power.speed=parseInt(data.speed);
      this.power.strength=parseInt(data.strength);
     
    })
    
  }

  addHeroTeam(){
    this.teamItemsService.getTeam(this.idHero,this.listHeoresGet)
    this.power= this.teamItemsService.power
  }

  //funcion para ordenar el objeto de powerstats de mayor a menor
 
  

}



