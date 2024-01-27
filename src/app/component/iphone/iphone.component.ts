import { Component } from "@angular/core";





@Component({
    selector: "iphone-root",
    templateUrl: "./iphone.component.html",
    styleUrls: ["./iphone.component.scss"]
})
export class Iphone{
    name : string = "Iphone 15 pro";
    price : number = 26000;
}