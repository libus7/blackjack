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
    this.cardValue = this.cardValue.bind(this);
  }

  componentDidMount() {
    this.randomValue();
    this.randomSuit();
  }

  randomValue() {
    const randomIndex = Math.floor(Math.random() * this.props.values.length);
    this.setState({ value: this.props.values[randomIndex] });
  }

  randomSuit() {
    const randomIndex = Math.floor(Math.random() * this.props.suits.length);
    this.setState({ suit: this.props.suits[randomIndex] });
  }

  cardValue() {
    return this.state.suit + this.state.value;
  }
   
  render() {
    return (
      <div className='Table'>
        <h1>Blackjack</h1>
        <div className='Table-full'>
          {/* <div>
              <img className='Table-img' src='http://www.marytcusack.com/maryc/decks/Images/Cards/EyeOceanSL/Extra05.jpg' />
          </div> */}
          <div className='Table-card'>  
            <Card suit={this.state.suit} value={this.state.value} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Table;