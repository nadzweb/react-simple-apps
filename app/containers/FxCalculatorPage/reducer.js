/*
 * Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_CURRENCY_DATA,
  LOAD_CURRENCY_DATA_SUCCESS,
  LOAD_CURRENCY_DATA_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  amount: '100',
  userData: {
    data: {},
  },
});

function currencyAmountReducer(state = initialState, action) {
  switch (action.type) {
    
    case LOAD_CURRENCY_DATA:
      console.log('load',state,action);
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'data'], {});
    case LOAD_CURRENCY_DATA_SUCCESS:
    console.log('success',state,action);
      return state
        .setIn(['userData', 'data'], action.data)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_CURRENCY_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default currencyAmountReducer;
