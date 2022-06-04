import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderconfirmedPage } from './orderconfirmed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderconfirmedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderconfirmedPageRoutingModule {}
