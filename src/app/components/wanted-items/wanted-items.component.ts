import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamItemsService } from 'src/app/core/team-items.service';
import { HeroResponse } from 'src/app/interface/heroResponse';
import { Powers } from 'src/app/interface/powerstatsResponse';
import { ListModal } from 'src/app/interface/searchResponse';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-wanted-items',
  templateUrl: './wanted-items.component.html',
  styleUrls: ['./wanted-items.component.scss']
})
export class WantedItemsComponent implements OnInit {

  //@Input()listHeroesSearch:Result[]=[]
  @Input() public listHeoresGet:HeroResponse[]=[]
  listModal:ListModal={
    name:'',
    alignment:''
  }
  closeResult = '';
  alertHeroeDuplicado:boolean=false
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

  ngOnInit(): void {
   console.log(this.listHeoresGet)
  }
  
  //abre el modal
  open(content:any) {
    this.modalService.open(content,{ centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.idHero=''
      this.closeResult = `Dismissed ${this.getDismissReasonn(reason)}`;
    });
  }
  //cierra el modal
  private getDismissReasonn(reason: any): string {
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
    this. searchNameAndAlignment(idHero)
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
  searchNameAndAlignment(idHero:string){
    let hero:HeroResponse[] = this.listHeoresGet.filter(hero => hero.id === idHero)
   hero.forEach(el=>{
      this.listModal.name=el.name!
      this.listModal.alignment=el.biography?.alignment!
   })
  }

  addHeroTeam(){
    switch (this.teamItemsService.addTeamItem(this.idHero,this.listHeoresGet)) {
      case 0:
        this.power= this.teamItemsService.power
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have been added to the Team successfully',
          showConfirmButton: false,
          timer: 1500
        })
      break;
      case 1:
        this.alertValidation('Maximum 3 good heroes can be added')
      break;
      case 2:
        this.alertValidation('Maximum 3 bad heroes can be added')
      break;
      case 3:
        this.alertValidation('This Hero is already in the Team')
      break;
      
    }
    
   
   
  }

  alertValidation(typeValidation:string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: typeValidation,
    })
  }
}





