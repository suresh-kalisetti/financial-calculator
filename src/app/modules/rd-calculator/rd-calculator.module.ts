import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdCalculatorPageRoutingModule } from './rd-calculator-routing.module';

import { RdCalculatorPage } from './rd-calculator.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdCalculatorPageRoutingModule,
    SharedModule
  ],
  declarations: [RdCalculatorPage]
})
export class RdCalculatorPageModule {}
