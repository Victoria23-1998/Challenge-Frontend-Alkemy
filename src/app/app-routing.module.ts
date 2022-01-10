import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VigilanteGuard } from './guards/vigilante.guard';

const routes: Routes = [
 {path:'',
  component:LoginComponent
 },
 {path:'home',
  component:HomeComponent,
  canActivate:[VigilanteGuard]
 },
 {path:'login',
  component:LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
