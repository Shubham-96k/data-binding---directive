import { Component } from "@angular/core";


//component initialize >> visible in UI
//component destroy >> removed from UI


@Component({
    selector: "app-singleFile-root",
    template: `
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let skill of skills">
                {{skill}}
            </li>
        </ul>
    `,
    styles: [`
        ul{
            margin-bottom: 2rem;
        li{
            font-size: 2rem;
            background-color: orange;
            color: black;
            text-align: center;
            padding: 1rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
    }
    `]
})
export class singleFileComponent{
    skills = ["html", "css", "javscript"]
}

// >> every component has its life cycle from initialize to
// destroy

//there are 8 life cycle hooks
// life cycle is nothing but a states of component

// >>>>>>>>  
//  lifecycle hooks:=> 
//          1. ngOnChanges
//          2. ngOnInit
//          3. ngDoCheck
//          4. ngAfterContentInit
//          5. ngAfterContentChecked
//          6. ngAfterViewInit
//          7. ngAfterViewChecked
//          8. ngOnDestroy