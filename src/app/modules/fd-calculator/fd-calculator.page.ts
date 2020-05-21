import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-fd-calculator',
  templateUrl: './fd-calculator.page.html',
  styleUrls: ['./fd-calculator.page.scss'],
})
export class FdCalculatorPage implements OnInit {
  fdForm: FormGroup;
  showResult = false;
  maturityAmount: number;
  maturityAmountFormatted: string;
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
  public pieChartLabels: Label[] = [['Amount Deposited'], ['Interest Earned']];
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
    this.fdForm = this.fb.group({
      fdAmount: ['', Validators.required],
      fdDuration: ['', Validators.required],
      fdDurationType: ['', Validators.required],
      interest: ['', Validators.required],
      frequency: [4, Validators.required]
    })
  }

  calculateFD() {
    this.pieChartData = [];
    const P = Math.round(this.fdForm.controls.fdAmount.value);
    const r = this.fdForm.controls.interest.value / 100;
    const n = this.fdForm.controls.frequency.value;;
    const duration = this.fdForm.controls.fdDuration.value;
    const t = this.fdForm.controls.fdDuration.value/this.fdForm.controls.fdDurationType.value;
    this.maturityAmount = Math.round(P * Math.pow((1+ (r/n)), n*t));
    this.maturityAmountFormatted = this.commonService.formatCurrency(this.maturityAmount);
    this.totalInterestEarned = this.commonService.formatCurrency(this.maturityAmount - P);
    this.pieChartData.push(P);
    this.pieChartData.push(this.maturityAmount - P);
    this.showResult = true;
  }

  clearForm() {
    this.fdForm.controls.fdAmount.setValue('');
    this.fdForm.controls.fdDuration.setValue('');
    this.fdForm.controls.fdDurationType.setValue('');
    this.fdForm.controls.interest.setValue('');
    this.fdForm.controls.frequency.setValue(4);
    this.showResult = false;
  }

}
