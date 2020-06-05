import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import{LoginComponent} from './login/login.component';
import{SigupComponent} from './sigup/sigup.component'

export const rootRouterConfig: Routes  = [


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sigup', component: SigupComponent },
  { path: 'footer', component:FooterComponent},
  { path: 'home', component:HomeComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
