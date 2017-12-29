import './Main.scss';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Cards from '../../containers/Cards/Cards';
import CardPage from '../../containers/CardPage/CardPage';
import About from '../../containers/About/About';

class Main extends Component {
  render() {
    return (
      <main className="card-container">
        <Switch>
          <Route path='/cards/new' component={CardPage}/>
          <Route path='/cards/:cardId' component={CardPage}/>
          <Route path='/about' component={About}/>
          <Route exact path='/' component={Cards}/>
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
