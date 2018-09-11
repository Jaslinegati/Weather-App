import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable'
// import { getData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ELDWEATHERService {
  apikey = '8cb332527fc641c739384c95d35c414c'
  constructor(private http: HttpClient){}

  getDailyData(city)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`)
  }


  getFiveDayData(city,country)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${this.apikey}`)
  }
}
