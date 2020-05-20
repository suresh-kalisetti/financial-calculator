import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fd-calculator',
  templateUrl: './fd-calculator.page.html',
  styleUrls: ['./fd-calculator.page.scss'],
})
export class FdCalculatorPage implements OnInit {
  fdForm: FormGroup;
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
    this.fdForm = this.fb.group({
      fdAmount: ['', Validators.required],
      fdPeriod: ['', Validators.required],
      fdPeriodType: ['', Validators.required],
      interest: ['', Validators.required],
      fequency: ['', Validators.required]
    })
  }

  calculateFD() {
    this.showResult = true;
  }

  clearForm() {
    this.fdForm.controls.fdAmount.setValue('');
    this.fdForm.controls.fdPeriod.setValue('');
    this.fdForm.controls.fdPeriodType.setValue('');
    this.fdForm.controls.interest.setValue('');
    this.fdForm.controls.fequency.setValue('');
    this.showResult = false;
  }

}
