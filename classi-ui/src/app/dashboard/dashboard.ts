import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
 chartOptions!: Partial<ApexOptions>;
cards = [
    {
      title: 'Orders Received',
      iconClass: 'bi bi-cart4',
      mainValue: 486,
      subTitle: 'Completed Orders',
      subValue: 351,
      bgClass: 'bg-primary',
    },
    {
      title: 'Total Sales',
      iconClass: 'bi bi-tag-fill',
      mainValue: 1641,
      subTitle: 'This Month',
      subValue: 213,
      bgClass: 'bg-info',
    },
    {
      title: 'Revenue',
      iconClass: 'bi bi-arrow-repeat',
      mainValue: '$42,56',
      subTitle: 'This Month',
      subValue: '$5,032',
      bgClass: 'bg-warning',
    },
    {
      title: 'Total Profit',
      iconClass: 'bi bi-cart4',
      mainValue: '$9,562',
      subTitle: 'This Month',
      subValue: '$542',
      bgClass: 'bg-danger',
    },
  ];

ngOnInit(): void {
  this.chartView();
}
 chartView(){
   this.chartOptions = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Arts',
          data: [20, 50, 30, 60, 30, 50]
        },
        {
          name: 'Commerce',
          data: [60, 30, 65, 45, 67, 35]
        }
      ],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      colors: ['#73b4ff', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      }
    };
 }
}

