import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './CButton.scss';

class CButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick() {
    this.setState(prevState => (
      {
        clickCount: prevState.clickCount + 1
      }
    ));
    this.props.onClick(this.state.clickCount);
  }

  render() {
    return (
      <Button bsStyle="primary" bsSize="large" onClick={() => this.handleClick()}>
        {this.props.message}
      </Button>
    );
  }
}

CButton.propTypes = {
  message: PropTypes.string
};


CButton.defaultProps = {
  message: 'Empty'
};

export default CButton;
