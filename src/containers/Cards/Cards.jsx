import './Cards.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  handleToggleFavorite(cardId) {
    let cards = [];
    let isChanged;

    this.state.cards.map((stateCard, cardIndex) => {
      let card = stateCard;

      if (card.id === cardId) {
        card.favorite = !card.favorite;
        isChanged = cardIndex;
      }

      cards.push(card);
    });

    if (isChanged !== undefined && CardService.bulkUpdate(cards)) {
      this.setState({
        cards: cards
      });

      console.log('changed cards', cards);
    }
  }

  render() {
    const cards = this.state.cards;

    const cardList = cards.map((card, cardIndex) => {
      return (
        <li
          key={card.id}
          className="card-item"
        >
          <Card
            card={card}
            onToggleFavorite={(cardId) => this.handleToggleFavorite(cardId)}
          />
        </li>
      );
    });

    return (
      <div className="cards">
        <div className="cards-title">Card list</div>
        <ul className="card-list">
          <li className="add-card-button card-item">
            <Link to='/cards/new'>
              <i className="fa fa-plus"></i>
            </Link>
          </li>
          {cardList}
        </ul>
      </div>
    );
  }
}

export default Cards;
