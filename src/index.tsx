import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, rootStore } from './models/Root';
import App from './App';
import { GlobalStyle } from './styled/general';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={rootStore}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
