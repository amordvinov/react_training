import './Header.scss';
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

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
          <NavLink exact activeClassName="active" to='/'>View All Cards</NavLink>
          <NavLink activeClassName="active" to='/about'>About</NavLink>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
