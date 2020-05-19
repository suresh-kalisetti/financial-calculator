import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.page.html',
  styleUrls: ['./emi-calculator.page.scss'],
})
export class EmiCalculatorPage implements OnInit {
  emiForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
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
    alert(this.emiForm.controls.loanAmount.value);
    alert(this.emiForm.controls.interestRate.value);
    alert(this.emiForm.controls.loanTenure.value);
    alert(this.emiForm.controls.tenureType.value);
  }

  clearForm() {
    this.emiForm.controls.loanAmount.setValue('');
    this.emiForm.controls.interestRate.setValue('');
    this.emiForm.controls.loanTenure.setValue('');
    this.emiForm.controls.tenureType.setValue('1');
  }

}
