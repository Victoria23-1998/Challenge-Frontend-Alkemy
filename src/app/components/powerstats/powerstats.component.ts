import { TeamItemsService } from 'src/app/core/team-items.service';
import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { Powers } from 'src/app/interface/powerstatsResponse';
@Component({
  selector: 'app-powerstats',
  templateUrl: './powerstats.component.html',
  styleUrls: ['./powerstats.component.scss']
})
export class PowerstatsComponent implements OnInit {
  @Input() public powerstats:Powers={} as Powers
  //ordenar de mayor a menor los powers
  
  constructor(private teamItemsService:TeamItemsService) { }

  ngOnInit(): void {
    
  }
  
  
}
