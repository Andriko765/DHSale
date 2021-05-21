import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Splide( '#sale_splide', {
      perPage: 6,
      perMove: 1 ,
      autoWidth: true,
      pauseOnHover: true,
      pagination: false
    } ).mount();
  }

}
