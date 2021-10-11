import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import GlobalStyles from './globalStyles';
import Header from './components/Header';

import Routes from './Routes';



function App() {
  return (
    <Provider store={store} >
      <GlobalStyles />
      
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
