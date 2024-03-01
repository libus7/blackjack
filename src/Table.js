import React, { Component } from 'react';
import Card from './Card';
import './Table.css';

class Table extends Component {
  static defaultProps = {
    values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'C1J', 'C2Q', 'C3K'],
    suits: ['H', 'S', 'C', 'D']
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '01',
      suit: 'H'
    };
    this.randomValue = this.randomValue.bind(this);
    this.randomSuit = this.randomSuit.bind(this);
    this.dealCard = this.dealCard.bind(this);
  }

  componentDidMount() {
    this.randomValue();
    this.randomSuit();
  }

  randomValue() {
    const randomIndex = Math.floor(Math.random() * this.props.values.length);
    return this.props.values[randomIndex];
  }
  
  randomSuit() {
    const randomIndex = Math.floor(Math.random() * this.props.suits.length);
    return this.props.suits[randomIndex];
  }

  dealCard() {
    this.setState({
      value: this.randomValue(), 
      suit: this.randomSuit()
    });
  }
   
  render() {
    return (
      <div className="Table-layout">
        <h1 className="Table-title">Blackjack</h1>
        <div className="Table">
          <img 
            className="Table-img" 
            src='http://www.marytcusack.com/maryc/decks/Images/Cards/EyeOceanSL/Extra05.jpg' 
          /> 
          <Card 
            suit={this.state.suit} 
            value={this.state.value} 
          />  
        </div>
        <button 
          className="Table-btn" 
          onClick={this.dealCard}>Deal Card
        </button>
      </div>
    );
  }
}

export default Table;