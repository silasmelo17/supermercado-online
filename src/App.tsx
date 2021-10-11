
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyles from './globalStyles';

import Routes from './Routes';



function App() {
  return (
    <Provider store={store} >
      <GlobalStyles />
      
      <Routes />
    </Provider>
  );
}

export default App;
