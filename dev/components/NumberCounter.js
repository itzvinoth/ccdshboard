import React from 'react';
import { Radio } from 'antd';
import request from 'superagent';
import _ from 'underscore';
import AnimatedNumber from 'react-animated-number';

const getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class NumberCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			smallValue: props.min,
			updates: 0,
			min: props.min,
			max: props.max
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.interval = setInterval(() => this.update(), 500);
    }

    update() {
        const {updates, min, max} = this.state;
        this.setState({
            smallValue: getRandomInt(min, max),
            updates: updates + 1
        });
    }

    componentDidUpdate() {
    	clearInterval(this.interval);
    }

	render() {
		const {smallValue} = this.state;
		return (<div> <h2 onClick={this.handleClick}>
	                <AnimatedNumber style={{ transition: '0.8s ease-out', transitionProperty: 'background-color, color, opacity' }}
	                    frameStyle={perc => ( perc === 100 ? {} : {opacity: 0.25} )} stepPrecision={0} value={smallValue} formatValue={n => `${'$ '+n}`}/>
	            </h2>
            </div>)
		
	}
}