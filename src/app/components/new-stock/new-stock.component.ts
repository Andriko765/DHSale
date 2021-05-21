import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Splide( '#newStock_splide', {
      perPage: 6,
      perMove: 1 ,
      autoWidth: true,
      pauseOnHover: true,
      pagination: false
    } ).mount();
  }

}
