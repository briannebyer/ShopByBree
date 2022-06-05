import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TailoredexperiencePageRoutingModule } from './tailoredexperience-routing.module';

import { TailoredexperiencePage } from './tailoredexperience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TailoredexperiencePageRoutingModule
  ],
  declarations: [TailoredexperiencePage]
})
export class TailoredexperiencePageModule {}
