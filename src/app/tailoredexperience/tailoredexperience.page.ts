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
  @ViewChild('tailored',{static:true}) tailored;
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
    label: 'Jewellery Type',
    data: this.numList,
    // shades of pink for each different jewellery type
    backgroundColor: [
      'rgba(251, 231, 239, 1)',
      'rgba(110, 48, 75, 1)',
      'rgba(190, 86, 131, 1)',
      'rgba(219, 10, 91, 1)',
      'rgba(246, 36, 86, 1)'
    ]
  }]
}

// creates chart
  ngOnInit() {
    this.chart = new chart(this.tailored.nativeElement, {
      type: 'pie',
      data: this.data,
    });
  }
   
  // once user chooses number and type, updates pie chart with preference
  numPush(num, lab) {
    console.log(num,lab)
    this.labelList.push(lab);
    this.numList.push(num);
    this.data.labels = this.labelList;
    this.data.datasets[0].data = this.numList;
    this.data.datasets[0].backgroundColor.push();
    this.chart.update();
  }
}
