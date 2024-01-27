import { Component, OnInit } from '@angular/core';
import { stdsData } from 'src/app/const/const';
import { Istd } from 'src/app/interface/interface';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
  stdArray: Array<Istd> = stdsData;
  constructor() { }

  ngOnInit(): void {
  }

}
