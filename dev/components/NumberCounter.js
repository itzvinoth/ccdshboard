import React from 'react';
import { Radio } from 'antd';
import request from 'superagent';
import _ from 'underscore';
import prettyBytes from 'pretty-bytes';
import AnimatedNumber from 'react-animated-number';
import LineChart from 'react-chartjs-2';


const getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class NumberCounter extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			smallValue: 10,
			updates: 0
		};
	}

	handleClick() {
		this.interval = setInterval(() => this.update(), 500);
    }

    update() {
        const {updates} = this.state;
        this.setState({
            smallValue: getRandomInt(10, 1000),
            updates: updates + 1
        });
    }

    componentDidUpdate() {
    	clearInterval(this.interval);
    }

	render() {
		const {smallValue, bigValue} = this.state;
		return (<div> <h2 onClick={this.handleClick}>
	                <AnimatedNumber style={{ transition: '0.8s ease-out', transitionProperty: 'background-color, color, opacity' }}
	                    frameStyle={perc => ( perc === 100 ? {} : {opacity: 0.25} )} stepPrecision={0} value={smallValue} formatValue={n => `${'$ '+n}`}/>
	            </h2>
            </div>)
		
	}
}