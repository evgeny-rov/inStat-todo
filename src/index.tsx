import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, rootStore } from './models/Root';
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
