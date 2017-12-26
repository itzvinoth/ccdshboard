import React from 'react';
import { Radio } from 'antd';
import LineChart from 'react-chartjs-2';

export default class DrawLineChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: props.type,
			chartData: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [{
					data: props.data,
					fill: false,
					borderColor: 'rgb(51, 51, 204)',
					radius: 0,
					borderWidth: 1
				}]
			},
			options: {
				responsive: true,
    			maintainAspectRatio: false,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true,
							display: false
						},
						gridLines: {
							display: false,
							drawBorder: false
						}
					}],
					xAxes: [{
						ticks: {
							display: false
						},
						gridLines: {
							display: false,
							drawBorder: false
						}
					}]
				}
			},
			width: props.width,
			height: props.height
		};
	}

	render() {
		const { type, chartData, options, width, height } = this.state;
		chartData.datasets[0].data = this.props.data;
		return (
			<div style={{width: '170px', height: '40px'}}>
				<LineChart type={type} data={chartData} options={options} width={width} height={height} />
			</div>
		)		
	}
}
