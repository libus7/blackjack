import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const { suit, value } = this.props;
    const card = `http://www.marytcusack.com/maryc/decks/Images/Cards/EyeOceanA/${suit}${value}.jpg`;
    return (
        <img 
          className="Card" 
          src={card} 
          alt={`Card ${value} of ${suit}`}
        />
    );
  }
}

export default Card;