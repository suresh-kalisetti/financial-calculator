import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FdCalculatorPageRoutingModule } from './fd-calculator-routing.module';

import { FdCalculatorPage } from './fd-calculator.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FdCalculatorPageRoutingModule,
    SharedModule
  ],
  declarations: [FdCalculatorPage]
})
export class FdCalculatorPageModule {}
