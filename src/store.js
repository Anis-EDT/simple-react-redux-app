import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import roote from './reducers/root';
export default function configureStore(initialState={}) {
    return createStore(
      roote,
      applyMiddleware(thunk)
    );
  }