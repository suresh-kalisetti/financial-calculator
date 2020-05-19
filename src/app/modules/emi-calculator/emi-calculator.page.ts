import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.page.html',
  styleUrls: ['./emi-calculator.page.scss'],
})
export class EmiCalculatorPage implements OnInit, OnDestroy {
  emiForm: FormGroup;
  unSubscribe: Subject<any> = new Subject<any>();
  showResult = false;

  constructor(
    private fb: FormBuilder,
    private cp: CurrencyPipe
  ) { }

  ngOnInit() {
    this.initForm();
    this.initCurrencyConversion();
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  initForm() {
    this.emiForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required],
      loanTenure: ['', Validators.required],
      tenureType: ['1', Validators.required]
    })
  }

  initCurrencyConversion() {
    // this.emiForm.controls.loanAmount.valueChanges
    //   .pipe(takeUntil(this.unSubscribe))
    //   .subscribe(val => {
    //     debugger;
    //     const formatted = this.cp.transform(val, 'INR');
    //     if (val != formatted) {
    //       this.emiForm.controls.loanAmount.patchValue(formatted);
    //     }
    //   })
  }

  calculateEMI() {
    this.showResult = true;
  }

  clearForm() {
    this.emiForm.controls.loanAmount.setValue('');
    this.emiForm.controls.interestRate.setValue('');
    this.emiForm.controls.loanTenure.setValue('');
    this.emiForm.controls.tenureType.setValue('1');
    this.showResult = false;
  }

}
