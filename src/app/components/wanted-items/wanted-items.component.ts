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
    
  }
  ngDoCheck(){
    this.listHeoresGet.forEach(el=>{
      this.listModal.name=el.name!
      this.listModal.alignment=el.biography?.alignment!
    })
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
    
    
    switch (this.teamItemsService.addTeamItem(this.idHero,this.listHeoresGet)) {
      case 1:
        this.alertValidation('Se pueden agregar máximo 3 heroes buenos')
      break;
      case 2:
        this.alertValidation('Se pueden agregar máximo 3 heroes malos')
      break;
      case 3:
        this.alertValidation('Este Heroe ya esta en el Team')
      break;
      
    }
    
    this.power= this.teamItemsService.power
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha agregado al Team con éxito',
      showConfirmButton: false,
      timer: 1500
    })
   
  }

  alertValidation(typeValidation:string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: typeValidation,
    })
  }
}





