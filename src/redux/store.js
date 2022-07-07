import { createStore } from 'redux';

import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  console.log("STORE CONTENT",store.getState())
});

export default store;