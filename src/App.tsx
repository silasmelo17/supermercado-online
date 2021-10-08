import React from 'react';

import GlobalStyles from './globalStyles';
import Header from './components/Header';

import Routes from './Routes';



function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <Routes />
    </>
  );
}

export default App;
