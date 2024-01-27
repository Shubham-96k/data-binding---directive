import { Component } from "@angular/core";


@Component({
    selector : "app-product-root",
    templateUrl: "./product.component.html",
    styleUrls : ["./product.component.scss"]// we can add multiple css file in one 
    //component
})
export class ProductComponent{
    productName : string = "Samsung";
    productId : number = 22000;
    skills : string = "html"
}//class and file name should same