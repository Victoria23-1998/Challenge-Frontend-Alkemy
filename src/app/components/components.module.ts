import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TeamContainerComponent } from './team-container/team-container.component';
import { SearchComponent } from './search/search.component';
import { WantedItemsComponent } from './wanted-items/wanted-items.component';
import { TeamItemsComponent } from './team-items/team-items.component';
import { PowerstatsComponent } from './powerstats/powerstats.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    TeamContainerComponent,
    SearchComponent,
    WantedItemsComponent,
    TeamItemsComponent,
    PowerstatsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    TeamContainerComponent,
    SearchComponent,
    WantedItemsComponent,
    TeamItemsComponent,
    PowerstatsComponent
  ]
})
export class ComponentsModule { }
