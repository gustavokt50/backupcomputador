import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';
import { BrMaskerModule } from 'br-mask';
import { LocationPage } from './location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicModule,
    LocationPageRoutingModule
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
