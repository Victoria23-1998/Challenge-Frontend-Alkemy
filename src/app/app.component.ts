import { Component,OnInit } from '@angular/core';
import { ShowMenuService } from './core/show-menu.service';
import { TeamItemsService } from './core/team-items.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'hero-app';
  
 
  constructor(public showMenuService:ShowMenuService, private teamItemsService:TeamItemsService){}
  ngOnInit() {
   this.teamItemsService.getLocalTeam()
   this.teamItemsService.getLocalPower()
   this.teamItemsService.getLocalAppearance()
    this.showMenuService.showMenu()
  }
}
