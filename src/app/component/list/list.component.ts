import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class Applist implements OnInit{
    skillsArray : Array<string> = ['HTML 5', 'CSS 3', 'JAVASCRIPT', 'ANGULAR', 'NODE JS']
    constructor(){}
    ngOnInit(): void {
        
    }
}