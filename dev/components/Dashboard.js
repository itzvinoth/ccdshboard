import React from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';
import _ from 'underscore';
import './Dashboard.css';
import LineChart from 'react-chartjs-2';


export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    
    // We can't use other names instead of 'state' prop in obj
    // Because 'state' is an existing property name in React 
    this.state = {
      type: 'line',
      chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
          borderWidth: 3
        }]
      },
      chartOptions:  {
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      }
    };
  }

  componentDidMount() {
    // console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }

  render() {
    return ( 
        <LineChart type={this.state.type} data={this.state.chartData} options={this.state.chartOptions} width={600} height={250}/>
    )
  }
  
}
