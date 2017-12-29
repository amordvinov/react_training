import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CardForm.scss';

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.card;

    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDestroyCard = this.handleDestroyCard.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSaveCard(card) {
    this.props.onSaveCard(card);
  }

  handleDestroyCard(cardId) {
    this.props.onDestroyCard(cardId);
  }

  render() {
    const { title } = this.state.title.length > 0 ? this.state : 'Title';
    const { description } = this.state.description.length > 0 ? this.state : 'Description';

    return (
      <div className="card-item">
        <form>
          <div className="input-group">
            <input
              name="title"
              className="form-control"
              type="text"
              value={this.state.title}
              placeholder={title}
              onChange={this.handleInputChange}
              id="title"
            />
          </div>
          <div className="input-group">
            <textarea
              name="description"
              className="form-control"
              value={this.state.description}
              placeholder={description}
              onChange={this.handleInputChange}
              id="title"
              rows="4"
            />
          </div>
          <div className="controls">
            <button
              className="btn btn-primary"
              onClick={() => this.handleSaveCard(this.state)}>Save</button>
            {
              this.props.card && this.props.card.id &&
              <button className="btn btn-danger" onClick={() => this.handleDestroyCard(this.props.card.id)}>Delete</button>
            }
          </div>
        </form>
      </div>
    );
  }
}

CardForm.propTypes = {
  card: PropTypes.object.isRequired,
  onSaveCard: PropTypes.func.isRequired,
  onDestroyCard: PropTypes.func.isRequired
};

CardForm.defaultProps = {
  onDestroyCard: (cardId) => {
    console.log('you should define handle function for deletion => ', cardId);
  },
  onSaveCard: (card) => {
    console.log('you should define handle function for saving => ', card);
  }
};

export default CardForm;
