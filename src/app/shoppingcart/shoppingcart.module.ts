import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingcartPageRoutingModule } from './shoppingcart-routing.module';

import { ShoppingcartPage } from './shoppingcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingcartPageRoutingModule
  ],
  declarations: [ShoppingcartPage]
})
export class ShoppingcartPageModule {}
