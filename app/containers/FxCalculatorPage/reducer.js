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
  CHANGE_AMOUNT,
  CHANGE_CURRENCY_FROM,
  CHANGE_CURRENCY_TO,
  LOAD_CURRENCY_DATA,
  LOAD_CURRENCY_DATA_SUCCESS,
  LOAD_CURRENCY_DATA_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  amount: '100',
  currencyFrom: 'USD',
  currencyTo: 'USD',
  userData: {
    data: {},
  }
});

function currencyAmountReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY_TO:
      return state.set('currencyTo', action.currency);
    case CHANGE_CURRENCY_FROM:
      return state.set('currencyFrom', action.currency);
    case CHANGE_AMOUNT:
      return state
        .set('amount', action.amount);
    case LOAD_CURRENCY_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'data'], {});
    case LOAD_CURRENCY_DATA_SUCCESS:
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
