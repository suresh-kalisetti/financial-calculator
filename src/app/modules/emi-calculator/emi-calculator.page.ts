import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.page.html',
  styleUrls: ['./emi-calculator.page.scss'],
})
export class EmiCalculatorPage implements OnInit, OnDestroy {
  emiAmount: number;
  emiAmountFormatted: string;
  totalInterest: string;
  totalPayment: string;
  emiForm: FormGroup;
  showResult = false;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true
      }
    }
  };
  public pieChartLabels: Label[] = [['Principal Loan Amount'], ['Total Interest']];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgb(136, 168, 37)', 'rgb(237, 140, 43)'],
    },
  ];

  constructor(
    private fb: FormBuilder,
    private cp: CurrencyPipe
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
    this.pieChartData = [];
    const P = Math.round(this.emiForm.controls.loanAmount.value);
    const R = this.emiForm.controls.interestRate.value / (12 * 100);
    const N = Math.round(this.emiForm.controls.tenureType.value == "1" ? this.emiForm.controls.loanTenure.value : (12 * this.emiForm.controls.loanTenure.value));
    this.emiAmount = Math.round((P * R * (Math.pow(1 + R, N))) / (Math.pow(1 + R, N) - 1));
    this.emiAmountFormatted = this.formatCurrency(this.emiAmount);
    this.pieChartData.push(P);
    this.pieChartData.push((this.emiAmount * N) - P);
    this.totalPayment = this.formatCurrency(this.emiAmount * N);
    this.totalInterest = this.formatCurrency((this.emiAmount * N) - P);
    this.showResult = true;
  }

  formatCurrency(number) {
    return this.cp.transform(number, '', '', '0.0-0');
  }

  clearForm() {
    this.emiForm.controls.loanAmount.setValue('');
    this.emiForm.controls.interestRate.setValue('');
    this.emiForm.controls.loanTenure.setValue('');
    this.emiForm.controls.tenureType.setValue('1');
    this.showResult = false;
  }

}
