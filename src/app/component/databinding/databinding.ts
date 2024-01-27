import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector: "app-databind",
    templateUrl: "./databinding.component.html",
    styleUrls: ["./databinding.component.scss"]
})
export class DataBinding implements OnInit, OnDestroy{//oninit and ondestroy in build interface given by angular among 8 life-cycle
    productName: string = "Air Jordan";
    price: number = 25000;
    productId : number=  101;
    productStatus: string = "shipped"
    isDisabled: boolean = true;
    ngOnInit(): void {
        console.log(`${this.productName} is ${this.productStatus}`);
        setTimeout(() => {
            this.isDisabled = false;
        },3000);
    }
    ngOnDestroy(): void {
        console.log(`component destroyed`); 
    }
}