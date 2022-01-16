import { Component,OnInit } from '@angular/core';
import { ShowMenuService } from './core/show-menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'hero-app';
  
 
  constructor(public showMenuService:ShowMenuService){}
  ngOnInit() {
   
    this.showMenuService.showMenu()
    
   
  }
}
