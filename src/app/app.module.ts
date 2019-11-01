import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';  

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    GetProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
