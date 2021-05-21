import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cadastra1PageRoutingModule } from './cadastra1-routing.module';

import { Cadastra1Page } from './cadastra1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicModule,
    Cadastra1PageRoutingModule
  ],
  declarations: [Cadastra1Page]
})
export class Cadastra1PageModule {}
