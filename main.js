import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/Components/App';

function main() {
  render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <App />
        </AppContainer>
      </Router>
    </Provider>,
    document.getElementById('main')
  );
}

main();

module.hot && module.hot.accept('./src/Components/App', main);
