import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector: ".app-products", // as adding class
    // selector: "[app-products]", // as html div element as a attribute
    // selector: "app-products", // custom html element
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit, OnDestroy{
    productStatus: string = "no product is added";
    productNumber: number = 0;
    isDisabled: boolean = true;
    searchedValue: string= "";
    searchedValue2 : string = "no result"
    ngOnInit():void{

    }
    ngOnDestroy(): void {
        
    }
    addproduct(){
        console.log('clicked');
        this.productNumber++
        this.productStatus = `${this.productNumber} product is added`
    }
    removeproduct(){
        console.log("removed");
        this.productNumber--
        if(this.productNumber === 0){
            this.productStatus = "no product is added";
        }else{
            this.productStatus = `${this.productNumber} product is added`
        }
    }
    searchValue(eve: Event){
        this.searchedValue = (eve.target as HTMLInputElement).value; 
    }
}