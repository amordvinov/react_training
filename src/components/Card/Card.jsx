import './Card.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  handleToggleFavorite() {
    this.props.onToggleFavorite(this.props.card.id);
  }

  render() {
    let favoriteButtonClasses = ['fa', 'fa-2x'];

    favoriteButtonClasses.push(this.props.card.favorite ? 'fa-heart' : 'fa-heart-o');

    return (
      <div className="card">
        <div className="card-title">{this.props.card.title}</div>
        <div className="card-description">{this.props.card.description}</div>
        <div className="controls">
          <div className="control-btn">
            <Link to={'cards/' + this.props.card.id}>
              <i className="fa fa-edit fa-2x"></i>
            </Link>
          </div>
          <div className="control-btn" onClick={this.handleToggleFavorite}>
            <i className={favoriteButtonClasses.join(' ')}></i>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

Card.defaultProps = {
  onToggleFavorite: () => {}
};

export default Card;
