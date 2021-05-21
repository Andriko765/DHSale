import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {

  constructor() { }
   goods = {
    name: 'Очки Julbo ULTIMATE BLACK/RED RV P1-3LAF' ,
    price: '5 994 грн',
    info: 'BLACK/RED RV P1-3LAF'

  };
  ngOnInit(): void {


  }

}
