import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './src/Components/App';

function main() {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('main')
  );
}

main();

module.hot && module.hot.accept('./src/Components/App', main);
