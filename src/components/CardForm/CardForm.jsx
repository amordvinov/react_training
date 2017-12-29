import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CardForm.scss';

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: this.props.card,
      touched: {
        title: false,
        description: false
      }
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDestroyCard = this.handleDestroyCard.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let card = this.state.card;
    card[name] = value;

    this.setState({
      card: card
    });
  }

  handleBlur(field) {
    let touched = this.state.touched;
    touched[field] = true;

    this.setState({
      touched: touched
    });
  }

  handleSaveCard(card) {
    this.props.onSaveCard(card);
  }

  handleDestroyCard(cardId) {
    this.props.onDestroyCard(cardId);
  }

  validateForm() {
    let validatedFields = Object.keys(this.props.rules);
    let result = {};

    validatedFields.forEach((validatedField) => {
      const validationRules = this.props.rules[validatedField];
      let validated = false;

      if (validationRules.required) {
        validated = validated || this.state.card[validatedField].length === 0;
      }

      if (validationRules.min !== undefined) {
        let minValue = parseInt(validationRules.min, 10);
        validated = validated || this.state.card[validatedField].length <= minValue;
      }

      if (validationRules.max !== undefined) {
        let maxValue = parseInt(validationRules.max, 10);
        validated = validated || this.state.card[validatedField].length >= maxValue;
      }

      result[validatedField] = validated;
    });

    return result;
  }

  render() {
    const { title } = this.state.card.title.length > 0 ? this.state.card : 'Title';
    const { description } = this.state.card.description.length > 0 ? this.state.card : 'Description';

    const errors = this.validateForm();
    const isEnabled = !Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    let classNames = {
      title: ['form-control'],
      description: ['form-control']
    };

    Object.keys(classNames).forEach((key) => {
      if (shouldMarkError(key)) {
        classNames[key].push('error');
      }
    });

    return (
      <div className="card-item">
        <form>
          <div className="input-group">
            <input
              name="title"
              className={classNames.title.join(' ')}
              type="text"
              value={this.state.card.title}
              placeholder={title}
              onBlur={() => this.handleBlur('title')}
              onChange={this.handleInputChange}
              id="title"
            />
          </div>
          <div className="input-group">
            <textarea
              name="description"
              className={classNames.description.join(' ')}
              value={this.state.card.description}
              placeholder={description}
              onBlur={() => this.handleBlur('description')}
              onChange={this.handleInputChange}
              id="title"
              rows="4"
            />
          </div>
          <div className="controls">
            <button
              disabled={!isEnabled}
              className="btn btn-primary"
              onClick={() => this.handleSaveCard(this.state.card)}>Save</button>
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
  rules: PropTypes.object.isRequired,
  onSaveCard: PropTypes.func.isRequired,
  onDestroyCard: PropTypes.func.isRequired
};

CardForm.defaultProps = {
  rules: {
    title: {
      required: true,
      min: 4,
      max: 15
    },
    description: {
      required: true,
      min: 10,
      max: 255
    }
  },
  onDestroyCard: (cardId) => {
    console.log('you should define handle function for deletion => ', cardId);
  },
  onSaveCard: (card) => {
    console.log('you should define handle function for saving => ', card);
  }
};

export default CardForm;
