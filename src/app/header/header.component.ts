import { Component, OnInit } from '@angular/core';
import { ELDWEATHERService } from './../eldweather.service';
import {Router , ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HEADERComponent implements OnInit {
  public searchString: string = '';

  
  constructor(private _weatherService: ELDWEATHERService,
              private _router: Router ,
              private _route: ActivatedRoute 
  ) { }

  ngOnInit() {
  }

  public search(){
    console.log('searching');
  let params: any = {
      city: this.searchString
  };
  this._router.navigate([''],{

    relativeTo: this. _route,
    queryParams: params
  });


  // };
}

}
