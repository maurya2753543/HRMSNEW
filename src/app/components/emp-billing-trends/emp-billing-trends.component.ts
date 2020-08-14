import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-emp-billing-trends',
  templateUrl: './emp-billing-trends.component.html',
  styleUrls: ['./emp-billing-trends.component.scss']
})
export class EmpBillingTrendsComponent implements OnInit {

  constructor() { }

  options: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        color: 'white',
        formatter: (value, ctx) => {
          const label = value; //ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  labels: Label[] = ["Submit for Approval", "Active", "Approved", "Requested"];
  data: number[] = [2, 5, 3, 13];
  type: ChartType = 'pie'; 
  legend = true;
  plugins = [pluginDataLabels];
  colors = [{
    backgroundColor: ['#65A2F5', '#4ADAB3', '#3164FA', '#FF6769'],
  }]; 

  ngOnInit() {
    this.randomData();
  }

  randomData(){
    timer(5000, 3500).subscribe(() => {
      this.data = this.data.map((val) => {
        return Math.floor((Math.random() * 20) + 3);
      });
    })
  }

}
