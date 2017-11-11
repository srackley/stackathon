import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './src/Components/App';

function main() {
  render(
    <Router>
      <AppContainer>
        <App />
      </AppContainer>
    </Router>,
    document.getElementById('main')
  );
}

main();

module.hot && module.hot.accept('./src/Components/App', main);
