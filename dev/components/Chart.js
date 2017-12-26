import React from 'react';
import { Radio } from 'antd';
import './Dashboard.css';
import LineChart from 'react-chartjs-2';


export default class Chart extends React.Component {
  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      type: 'line',
      value: 'year',
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          data: [8, 19, 7, 15, 2, 3, 14, 4, 16, 6, 8, 10],
          fill: false,
          borderColor: 'rgb(51, 51, 204)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'x-axis'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0,
              max: 20,
              stepSize: 10
            }
          }]
        }
      }
    };
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      chartData: {
        labels: (event.target.value === 'month' || event.target.value === 'day') ? ['Januar', 'March', 'April', 'June'] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          data: (event.target.value === 'month' || event.target.value === 'day') ? [4, 9, 2, 7] : [8, 19, 7, 15, 2, 3, 14, 4, 16, 6, 8, 10],
          borderColor: '#9999e6',
          borderWidth: 2
        }]
      }
    });
  }

  render() {
    return ( 
      <div>
        <div style={{marginLeft:'70%'}}>
          <Radio.Group value={this.state.value} onChange={this.onChange} style={{ marginBottom: 16 }}>
            <Radio.Button value="year">Year</Radio.Button>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="week">Week</Radio.Button>
            <Radio.Button value="day">Day</Radio.Button>
          </Radio.Group>
        </div>
        <LineChart type={this.state.type} data={this.state.chartData} options={this.state.options} width={400} height={120}/>
      </div>
    )
  }
  
}
