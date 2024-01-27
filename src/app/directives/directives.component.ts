import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isProductAvailable!: boolean;
  constructor(){
    this.isProductAvailable = Math.random() >= .3 ? true : false;
    console.log(this.isProductAvailable);
  }

  ngOnInit(): void {
  }

  getBg(){
    return this.isProductAvailable ? 'green' : 'lightgrey'
  }
}
