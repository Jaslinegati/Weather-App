import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ForecastComponent} from './forecast/forecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const Routes: Routes =
[
  // {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'', component: HomeComponent },
  {path:'home', component: HomeComponent },
  {path: 'forecast', component:ForecastComponent},  
  {path: "**", component:PageNotFoundComponent}
]
  @NgModule({
  exports: [RouterModule],
  imports:[RouterModule.forRoot(Routes)],

})
export class AppRoutingModule { }
export const routingComponents =
 [
  HomeComponent,
  ForecastComponent,
  PageNotFoundComponent
 ]