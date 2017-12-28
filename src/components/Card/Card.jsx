import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Card Title: {this.props.card.title}</h2>
      </div>
    );
  }
}

export default Card;
