import React from 'react';
import { Radio } from 'antd';
import AnimatedNumber from 'react-animated-number';

const getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class NumberCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			min: props.min,
			max: props.max
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps !== nextState) {
			return true;
		} else {
			return false;
		}
    }

	render() {
		const {min, max} = this.state;
		const integer = getRandomInt(min, max);
		return (<div> <h2>
	                <AnimatedNumber style={{ transition: '0.8s ease-out', transitionProperty: 'background-color, color, opacity' }}
	                    frameStyle={perc => ( perc === 100 ? {} : {opacity: 0.25} )} stepPrecision={0} value={integer} formatValue={n => `${'$ '+n}`}/>
	            </h2>
            </div>)
		
	}
}
