import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingdetailsPageRoutingModule } from './shippingdetails-routing.module';

import { ShippingdetailsPage } from './shippingdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingdetailsPageRoutingModule
  ],
  declarations: [ShippingdetailsPage]
})
export class ShippingdetailsPageModule {}
