import React from 'react';

import { Card } from 'antd';
import './Cards.css';

export default class Cards extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		arrayOfCards : [1, 2, 3, 4, 5, 6, 7],
    		index: 0,
      		translateValue: 0,
      		transition: '',
      		count: 1,
      		sourceArray: [8, 19, 7, 15, 2, 3, 14, 4, 16, 9, 8, 10, 1, 5, 6, 11],
      		finalArray: [[], []]
    	};
    	this.handleClick = this.handleClick.bind(this);
	}
	getRandomElements(array, elementsLength){
	    var result = [[], []];
	    for (var i = 0; i < elementsLength; i++) {
	        result[0].push(array[Math.floor(Math.random()*array.length)]);
	        result[1].push(array[Math.floor(Math.random()*array.length)]);
	    }
	    return result;
	}
	handleClick() {
		let cards = this.state.arrayOfCards;
		let sourceArray = this.state.sourceArray;
		let finalArray;
		let arrayOfCards = cards.map(function(n){
			if (n == cards.length) {
				return 1;
			} else {
				return n+1;
			}
		});
		// finalArray = getRandomElements(sourceArray, 10);
		let newValueArray = this.getRandomElements(this.state.sourceArray, 10);
		this.setState({
			count: this.state.count + 1,
			translateValue: (-210 * this.state.count),
			transition: 'transform 0.75s ease-out',
			finalArray: newValueArray
		});
		this.props.onSelectCards(newValueArray);
	}

	renderCards() {
		let cards = this.state.arrayOfCards;
		let count = this.state.count;
		let slides = [];
		for (var i=0; i<cards.length; i++) {
			if (count-1 !== i) {
				slides.push(<div className="cards-container" key={i} style={{padding: '20px'}} onClick={this.handleClick} >
					<Card style={{ width: 170, background: "#3333cc", height: 200, transform: `translateX(${this.state.translateValue}px)`, transition: `${this.state.transition}` }}>
						<p>Card content {cards[i]}</p>
					</Card>
				</div>);
			} else {
				slides.push(<div className="cards-container" key={i} style={{padding: '20px'}} >
					<Card style={{ width: 200, background: "#3333cc", height: 230, transform: `translateX(${this.state.translateValue}px)`, transition: `${this.state.transition}` }}>
						<p>Card content {cards[i]}</p>
					</Card>
				</div>);
			}
			
		}
		return slides;
	}

	render() {
		
		return (

			<div className="cards-main-container">
				<div></div>
					{ this.renderCards() }
				
			</div>
		)
	}
}
