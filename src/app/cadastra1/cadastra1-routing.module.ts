import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cadastra1Page } from './cadastra1.page';

const routes: Routes = [
  {
    path: '',
    component: Cadastra1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cadastra1PageRoutingModule {}
