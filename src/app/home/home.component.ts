import { Component, OnInit } from '@angular/core';
import { ELDWEATHERService } from './../eldweather.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  template: `

  <div class="p-3 mb-2 bg-info text-white">
  <div *ngIf = "!eldweather">
  Loading weather... <i class="fas fa-spinner"></i></div>

<div *ngIf = "eldweather">
<br/>
<br/>
  <div class="container">
  <div class="row">
    <div class="col-sm">
    
    <div class="media">
  <img class="align-self-start mr-3" [src]="iconUrl" alt="Generic placeholder image">
  <div class="media-body">
    <br/>
    <h3 class="text-primary">{{eldweather.name}}, {{eldweather.sys.country}}</h3>
    <h4 class="text-dark">Today's weather is:</h4>
  
    <p>Weather:{{eldweather.weather[0].main}}</p>
    <p>Weather description: {{eldweather.weather[0].description}}</p>
    <p>Clouds:{{eldweather.clouds.all}}</p>
    <p>Humidity:{{eldweather.main.humidity}}</p>
    <p>Maximum Temperature{{eldweather.main.temp_max}}</p>
    <p>Minimum Temperature{{eldweather.main.temp_min}}</p>
    <p>Wind.Speed{{eldweather.wind.speed}}</p>
    <p>{{errorMsg}}</p>
  
  </div>
</div>

    
    </div>
    <div class="col-sm">
    <h5 class="text-dark">Due to todays weather forecast , remember to {{message}}</h5> 
    </div>
  </div>
</div>

 



  </div>
 </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  
  public message: string = '';
  public iconUrl = 'http://openweathermap.org/img/w/';
  public eldweather;
  public errorMsg;
  public city: string = "Eldoret" ;

  constructor( private _eldweatherService:ELDWEATHERService,
               private  _router: ActivatedRoute ) { }

  ngOnInit() 
  {
    
    this._router.queryParams.subscribe((params: any)=>{
      console.log('params',params);
      let city = '';
      if (params.city){
          city = params.city
      } else {
         city = this.city;
      }
      this.getWeather(city);
    });

  }
   
 public  decision(weather){
   console.log('decision', weather);
   let main = weather[0].main;
   console.log('main',main);
   switch(main){
     case 'Clouds':
       this.message = 'Wear sweater :-)'; 
    break;
    case 'rain':
    this.message = 'carry an umbrella :-)'
    break;
    case 'sunny':
    this.message = 'Wear Sunglasses :-)'
    break;

   }

 };
public getWeather(city){
  console.log('getWeather');
  this._eldweatherService.getDailyData(city)
  .subscribe((data: any) => {
    console.log('data',data);
    this.decision(data.weather);
    const icon = data.weather[0].icon;
    this.iconUrl = this.iconUrl + icon + '.png';
    this.eldweather = data
   } ,
  error => this.errorMsg = error )  ;
}

 }

