import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { HeroService } from './chart.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})


export class ChartComponent implements OnInit {
  heroes: Data[];
  LineChart = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.show();
  }
  getHeroes() {
    let a = this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
        console.log("heroes", this.heroes);

        let ActiveEnergy = Object.keys(heroes).map(function (personNamedIndex) {
          let person = heroes[personNamedIndex];
          return person.ActiveEnergy;
        });
        let date = Object.keys(heroes).map(function (personNamedIndex) {
          let person = heroes[personNamedIndex];
          let data = person.date.subTime.day + "/" + person.date.subTime.month + "/" + person.date.subTime.year+" "+person.date.subTime.hours+":"+person.date.subTime.minutes+":"+person.date.subTime.seconds;
          return data;
        });
        console.log("resultArray", ActiveEnergy);
        console.log("date", date);

        this.LineChart = new Chart('lineChart', {
          type: 'line',
          data: {
            labels: date,//["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
              label: '# of Votes',
              data: ActiveEnergy,

              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });


      });

  }

  show() {
    // console.log("heroes", this.getHeroes);
  }
}