import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionaPageRoutingModule } from './seleciona-routing.module';

import { SelecionaPage } from './seleciona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicModule,
    SelecionaPageRoutingModule
  ],
  declarations: [SelecionaPage]
})
export class SelecionaPageModule {}
