import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderconfirmedPageRoutingModule } from './orderconfirmed-routing.module';

import { OrderconfirmedPage } from './orderconfirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderconfirmedPageRoutingModule
  ],
  declarations: [OrderconfirmedPage]
})
export class OrderconfirmedPageModule {}
