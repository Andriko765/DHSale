import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import {getClassName} from 'codelyzer/util/utils';


@Component({
  selector: 'app-goods-page',
  templateUrl: './goods-page.component.html',
  styleUrls: ['./goods-page.component.css']
})
export class GoodsPageComponent implements OnInit {

  constructor() { }
flag = 1;



  ngOnInit(): void {
     let secondarySlider = new Splide( '.secondary-slider', {
    arrows: false,
    rewind      : true,
    fixedWidth  : 100,
    fixedHeight : 64,
    isNavigation: true,
    gap         : 10,
    focus       : 'center',
    pagination  : false,
    cover       : true,
    breakpoints : {
      '600': {
        fixedWidth  : 66,
        fixedHeight : 40,
      }
    }
  } ).mount();

// Create the main slider.
     let primarySlider = new Splide( '.primary-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
  } );
     primarySlider.sync( secondarySlider ).mount();
     this.tabs();
  }




  // tslint:disable-next-line:typedef
  deliverSelect(){
    this.flag = 1;
  }

  // tslint:disable-next-line:typedef
  paymentSelect(){
    this.flag = 2;
  }

  // tslint:disable-next-line:typedef
  garantiSelect(){
    this.flag = 3;
  }


  // tslint:disable-next-line:typedef
  tabs(){
    let tabNav = document.querySelectorAll('.delivery');
    tabNav.forEach( item => {
      item.addEventListener('click', selectTab);
    });

    // tslint:disable-next-line:typedef
    function selectTab(){
      tabNav.forEach( item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    }
  }



}
