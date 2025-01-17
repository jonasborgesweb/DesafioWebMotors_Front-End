import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import CSS Global
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);
export default App;
