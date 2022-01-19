import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ItemsService } from './core/items.service';
import 'animate.css';

//data que se va a cargar antes de iniciar la aplicación
export function parameterProviderFactory(provider:ItemsService) {
  return () => provider.getHeroes(6);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    PagesModule,
    ReactiveFormsModule,
    ComponentsModule
   
  ],
  
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: parameterProviderFactory,
      deps: [ItemsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
