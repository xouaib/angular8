import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Add new components to routing
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { GetProductComponent } from './get-product/get-product.component';

const routes: Routes = [
  {
    path:'product/create',
    component:AddProductComponent
  },
  {
    path:'update/:id',
    component:UpdateProductComponent
  },
  {
    path:'products',
    component:GetProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
