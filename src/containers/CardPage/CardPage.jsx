import './CardPage.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import CardForm from '../../components/CardForm/CardForm';
import CardService from '../../services/api/card';

class CardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      card: undefined
    };
  }

  componentDidMount() {
    let card;
    const matchParams = this.props.match.params;

    if (matchParams && matchParams.cardId) {
      card = CardService.get(matchParams.cardId);
    }

    if (card === undefined || !card) {
      card = CardService.getEmptyCard();
    }

    this.setState({
      card: card
    });
  }

  handleSaveCard(card) {
    if (CardService.save(card)) {
      this.setState({ redirect: true });
    }
  }

  handleDestroyCard(cardId) {
    if (CardService.destroy(cardId)) {
      this.setState({ redirect: true });
    }
  }

  render() {
    let cardPageContent = (
      <div />
    );
    const pageTitle = this.props.card !== undefined && this.props.card.id ? 'Card Info' : 'New card';
    const { redirect } = this.state;

    if (this.state.card) {
      cardPageContent = (
        <CardForm
          card={this.state.card}
          onSaveCard={(card) => this.handleSaveCard(card)}
          onDestroyCard={(cardId) => this.handleDestroyCard(cardId)}
        />
      );
    }

    if (redirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="cards card-page">
        <div className="card-page-title">{pageTitle}</div>
        <div className="card-page-content">
          {cardPageContent}
        </div>
      </div>
    );
  }
}

export default CardPage;
