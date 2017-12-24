import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
import _ from 'underscore';
import './Cards.css';

export default class Cards extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		arrayOfCards : [1, 2, 3, 4, 5, 6, 7],
    		index: 0,
      		translateValue: 0
    	};
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let cards = this.state.arrayOfCards;
		let arrayOfCards = cards.map(function(n){
			if (n == cards.length) {
				return 1;
			} else {
				return n+1;
			}
		});
		this.setState({
			arrayOfCards: arrayOfCards
		});
	}

	render() {
		function CardList(props) {
			const cards = props.arrayOfCards;
			const handleClick = props.handleClick;
			const cardList = cards.map(function(card, index) {
				return (<div className="cards-container" key={index} onClick={handleClick} style={{padding: '20px'}}>
					<Card style={{ width: 170, height: 200 }}>
						<p>Card content {card}</p>
					</Card>
				</div>);
			});
			return cardList;
		}
		
		return (
			<div className="cards-main-container">
				<CardList arrayOfCards={this.state.arrayOfCards} handleClick={this.handleClick}/>
			</div>
		)
	}
}