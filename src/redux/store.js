import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer';

// Load state from local storage
const persistedState = localStorage.getItem('cartState')
  ? JSON.parse(localStorage.getItem('cartState'))
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

// Save state to local storage
store.subscribe(() => {
  localStorage.setItem('cartState', JSON.stringify(store.getState()));
});

export default store;
