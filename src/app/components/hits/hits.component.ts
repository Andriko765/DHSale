import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.css']
})
export class HitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Splide( '#hits_splide', {
      perPage: 6,
      perMove: 1 ,
      autoWidth: true,
      pauseOnHover: true,
      pagination: false
    } ).mount();
  }

}
