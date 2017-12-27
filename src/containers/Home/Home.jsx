import React, { Component } from 'react';
/* TODO: add paths to package.json */
import CButton from '../../components/CButton/CButton';
import './Home.scss';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

class Home extends Component {
  handleClick(clickCount) {
    console.log('The button was clicked ' + clickCount + ' times');
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">Hello, {formatName(user)}!</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <p className="Home-intro">
          <CButton
            message={'Click me, ' + user.firstName + ' ' + user.lastName}
            onClick={(clickCount) => this.handleClick(clickCount)}
          />
        </p>
        <p className="Home-intro">
          <CButton
            message={'Click me, ' + user.firstName + ' ' + user.lastName}
            onClick={(clickCount) => this.handleClick(clickCount)}
          />
        </p>
      </div>
    );
  }
}

export default Home;
