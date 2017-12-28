import React, { Component } from 'react';
import './CardForm.scss';

class CardForm extends Component {
  render() {
    return (
      <div>
        <h1>Edit the card</h1>
        <form>
          <label htmlFor="title">Title: </label>
          <input type="text" placeholder="Title" id="title"/>
        </form>
      </div>
    );
  }
}

export default CardForm;
