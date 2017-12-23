import React from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';
import request from 'superagent';
import _ from 'underscore';
import './Dashboard.css';
import LineChart from 'react-chartjs-2';


export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // We can't use other names instead of 'state' prop in obj
    // Because 'state' is an existing property name in React 
    this.state = {
      type: 'line',
      value: 'year',
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: '# of Votes',
          data: [8, 19, 7, 15, 2, 3, 14, 4, 16, 6, 8, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
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

  onChange(event) {
    this.setState({
      value: event.target.value,
      chartData: {
        labels: event.target.value === 'month' ? ['Januar', 'March', 'April', 'June'] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: '# of Votes',
          data: event.target.value === 'month' ? [4, 9, 2, 7] : [8, 19, 7, 15, 2, 3, 14, 4, 16, 6, 8, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }]
      }
    });
  }

  componentDidMount() {
    // console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }

  render() {
    return ( 
      <div>
        <div>
          <Radio.Group value={this.state.value} onChange={this.onChange} style={{ marginBottom: 16 }}>
            <Radio.Button value="year">Year</Radio.Button>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="week">Week</Radio.Button>
            <Radio.Button value="day">Day</Radio.Button>
          </Radio.Group>
        </div>
        <LineChart type={this.state.type} data={this.state.chartData} options={this.state.chartOptions} width={400} height={100}/>
      </div>
    )
  }
  
}
