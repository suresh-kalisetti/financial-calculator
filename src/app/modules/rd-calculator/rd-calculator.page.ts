import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-rd-calculator',
  templateUrl: './rd-calculator.page.html',
  styleUrls: ['./rd-calculator.page.scss'],
})
export class RdCalculatorPage implements OnInit {
  rdForm: FormGroup;
  showResult = false;
  maturityAmount: number;
  maturityAmountFormatted: string;
  principalAmount: string;
  totalInterestEarned: string;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true
      }
    }
  };
  public pieChartLabels: Label[] = [['Principal'], ['Interest Earned']];
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
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
  }

  initForm() {
    this.rdForm = this.fb.group({
      rdAmount: ['', Validators.required],
      duration: ['', Validators.required],
      interest: ['', Validators.required],
      frequency: [4, Validators.required]
    })
  }

  calculateRD() {
    this.pieChartData = [];
    const p = Math.round(this.rdForm.controls.rdAmount.value);
    const t = Math.round(this.rdForm.controls.duration.value);
    const n = this.rdForm.controls.frequency.value;
    const r = this.rdForm.controls.interest.value;
    let amounts = [];
    let x = this.calculate_x(r,n);

    for (let i = t; i >= 1; i--) {
      const a = p * Math.pow(x, n * this.monthsToYears(i));
      amounts.push(a);
    }

    this.maturityAmount = Math.round(amounts.reduce(function(previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    }));
    this.maturityAmountFormatted = this.commonService.formatCurrency(this.maturityAmount);
    this.totalInterestEarned = this.commonService.formatCurrency(this.maturityAmount - p * t);
    this.principalAmount = this.commonService.formatCurrency(p * t);
    
    this.pieChartData.push(p * t);
    this.pieChartData.push(this.maturityAmount - p * t);
    this.showResult = true;
  }

  calculate_x(r: number, n: number){
    var x =  1+(r/100)/n;
    return x;
  }

  monthsToYears(t: number){
    return t/12;
  }

  clearForm() {
    this.rdForm.controls.rdAmount.setValue('');
    this.rdForm.controls.duration.setValue('');
    this.rdForm.controls.interest.setValue('');
    this.rdForm.controls.frequency.setValue(4);
    this.showResult = false;
  }
}
