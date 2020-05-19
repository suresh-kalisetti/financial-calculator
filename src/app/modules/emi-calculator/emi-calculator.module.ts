import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmiCalculatorPageRoutingModule } from './emi-calculator-routing.module';

import { EmiCalculatorPage } from './emi-calculator.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmiCalculatorPageRoutingModule,
    SharedModule
  ],
  declarations: [EmiCalculatorPage]
})
export class EmiCalculatorPageModule {}
