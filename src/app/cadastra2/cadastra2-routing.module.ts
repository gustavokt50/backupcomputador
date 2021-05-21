import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cadastra2Page } from './cadastra2.page';

const routes: Routes = [
  {
    path: '',
    component: Cadastra2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cadastra2PageRoutingModule {}
