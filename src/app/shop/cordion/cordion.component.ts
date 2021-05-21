import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cordion',
  templateUrl: './cordion.component.html',
  styleUrls: ['./cordion.component.css']
})
export class CordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let click = document.querySelector(" #but ");
    let wrap = document.querySelector(' .wrapp ');
    let change = document.querySelector('.but_icon');




    const start = () => {
      wrap.classList.toggle('is_active');
      change.classList.toggle('active');
    };
    click.addEventListener('click', start );

  }

}
