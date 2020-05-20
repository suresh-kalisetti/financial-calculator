import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.page.html',
  styleUrls: ['./emi-calculator.page.scss'],
})
export class EmiCalculatorPage implements OnInit, OnDestroy {
  emiForm: FormGroup;
  showResult = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
  }

  initForm() {
    this.emiForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required],
      loanTenure: ['', Validators.required],
      tenureType: ['1', Validators.required]
    })
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
