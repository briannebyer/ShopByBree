import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
// // import { Chart } from 'chart.js';
import chart from 'chart.js/auto';

@Component({
  selector: 'app-tailoredexperience',
  templateUrl: './tailoredexperience.page.html',
  styleUrls: ['./tailoredexperience.page.scss'],
})
export class TailoredexperiencePage implements OnInit {

  constructor() { }

  numList = [];
  labelList = [];
  @ViewChild('healthCanvas',{static:true}) healthCanvas;
  chart: any;

  

  options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
};

data = {
  labels: this.labelList,
  datasets: [{
    label: '# of heart rate',
    data: this.numList,
    backgroundColor: [
    ]
  }]
}


  ngOnInit() {
    this.chart = new chart(this.healthCanvas.nativeElement, {
      type: 'bar',
      data: this.data,
      options: this.options
    });
  }
   
  numPush(num, lab) {
    console.log(num,lab)
    this.labelList.push(lab);
    this.numList.push(num);
    this.data.labels = this.labelList;
    this.data.datasets[0].data = this.numList;
    this.data.datasets[0].backgroundColor.push(  "rgba(255, 99, 132, 0.2)");
    this.chart.update();
  }
}
