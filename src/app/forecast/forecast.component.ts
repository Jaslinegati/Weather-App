import { Component, OnInit } from '@angular/core';
import { ELDWEATHERService } from './../eldweather.service';
import { Capability } from 'protractor';

@Component({
  selector: 'app-forecast',
  templateUrl: "./forecast.component.html",
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  public iconUrl = 'http://openweathermap.org/img/w/';
  public fiveDayData: any[];

  constructor(private _FiveDayDataService: ELDWEATHERService) { }

  ngOnInit() {
    let city = "Eldoret";
    let country = "Ke"
    this._FiveDayDataService.getFiveDayData(city, country)
      .subscribe((data: any) =>{
        this.fiveDayData = [data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]];
        const icon = data.list[0].weather[0].icon;
        this.iconUrl = this.iconUrl + icon + '.png';
    

      });

    }


}
