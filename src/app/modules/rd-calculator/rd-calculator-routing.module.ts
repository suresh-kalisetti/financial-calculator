import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdCalculatorPage } from './rd-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: RdCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdCalculatorPageRoutingModule {}
