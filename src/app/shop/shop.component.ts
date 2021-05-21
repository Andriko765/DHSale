import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import {element} from 'protractor';
import {style} from '@angular/animations';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
flag = 1;



  constructor() {

  }

  ngOnInit(): void {



    new Splide('#splide_new', {
      type : 'fade',
      arrows: false,
      autoplay: true,
      rewind: true,
      fixedHeight: 250,
      cover: true,
    }).mount();
    this.tabs();
    }

  // tslint:disable-next-line:typedef
    tabs(){
    let tabNav = document.querySelectorAll('.listen');
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











