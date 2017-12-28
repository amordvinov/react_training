import './CardPage.scss';
import React, { Component } from 'react';

import CardForm from '../../components/CardForm/CardForm';

class CardPage extends Component {
  render() {
    return (
      <div className="Home">
        <span>Place card form here</span>
        <CardForm />
      </div>
    );
  }
}

export default CardPage;
