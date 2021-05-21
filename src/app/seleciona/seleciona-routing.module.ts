import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionaPage } from './seleciona.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionaPageRoutingModule {}
