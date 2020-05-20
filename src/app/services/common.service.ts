import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private cp: CurrencyPipe
    ) { }

  formatCurrency(currency: number) {
    return this.cp.transform(currency, '', '', '0.0-0');
  }
}
