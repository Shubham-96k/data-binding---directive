import { Component, OnInit } from '@angular/core';
import { postArray } from 'src/app/const/post';
import { Ipost } from 'src/app/interface/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  postData : Array<Ipost> = postArray;
  constructor() { }

  ngOnInit(): void {
  }

}
