import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cadastra2PageRoutingModule } from './cadastra2-routing.module';

import { Cadastra2Page } from './cadastra2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicModule,
    Cadastra2PageRoutingModule
  ],
  declarations: [Cadastra2Page]
})
export class Cadastra2PageModule {}
