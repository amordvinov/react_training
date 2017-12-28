import './Header.scss';
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.history.listen(() => {
      console.log('New URL', this.props.history.location.pathname);
    });
  }

  render() {
    /* TODO: add back button */
    return (
      <header className="header">
        <nav>
          <Link to='/'>View All Cards</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
