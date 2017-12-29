import './App.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';

import 'font-awesome/scss/font-awesome.scss';

const App = () => (
  <div className="App-main">
    <Header />
    <Main />
  </div>
);

export default App;
