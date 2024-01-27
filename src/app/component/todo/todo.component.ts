import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../interface/interface';
import { todoArray } from '../../const/const';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
   todoObj: Array<Itodo> = todoArray;
  constructor() { }

  ngOnInit(): void {
    console.log(this.todoObj);
    
  }

}
