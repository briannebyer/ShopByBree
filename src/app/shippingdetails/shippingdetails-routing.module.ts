import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingdetailsPage } from './shippingdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingdetailsPageRoutingModule {}
