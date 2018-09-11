import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HEADERComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    HEADERComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
