import './Cards.scss';
import React, { Component } from 'react';

/* TODO: add paths to package.json */

import CardService from '../../services/api/card';
import Card from '../../components/Card/Card';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const cards = CardService.get();

    this.setState({
      cards: cards
    });
  }

  render() {
    const cards = this.state.cards;

    const cardList = cards.map((card, cardIndex) => {
      return (
        <li key={card.id}>
          <Card card={card}/>
        </li>
      );
    });

    return (
      <div className="Cards">
        <ul className="Cards-list">
          {cardList}
        </ul>
      </div>
    );
  }
}

export default Cards;
