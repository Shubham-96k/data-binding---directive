import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/product/product.component';
import { Iphone } from './component/iphone/iphone.component';
import { singleFileComponent } from './component/singleFilecomp/singleFile.component';
import { DataBinding } from './component/databinding/databinding';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { TodoComponent } from './component/todo/todo.component';
import { Applist } from './component/list/list.component';
import { StdtableComponent } from './component/stdtable/stdtable.component';
import { CardComponent } from './component/card/card.component';
import { TabComponent } from './component/tab/tab.component';
import { NgSwitchTabComponent } from './component/ng-switch-tab/ng-switch-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    Iphone,
    singleFileComponent,
    DataBinding,
    DirectivesComponent,
    Applist,
    TodoComponent,
    StdtableComponent,
    CardComponent,
    TabComponent,
    NgSwitchTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
