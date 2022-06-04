import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingcartPage } from './shoppingcart.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingcartPageRoutingModule {}
