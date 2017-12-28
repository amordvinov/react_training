import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App/App';

const rootElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(rootElement, document.getElementById('root'));
