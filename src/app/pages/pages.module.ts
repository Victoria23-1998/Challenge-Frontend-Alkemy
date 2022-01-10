import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BootstrapModule } from '../shared/bootstrap/bootstrap.module';
import 'animate.css';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule
  ]
})
export class PagesModule { }
