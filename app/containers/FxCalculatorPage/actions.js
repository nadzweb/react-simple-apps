/*
 * Page Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CURRENCIES,
  LOAD_CURRENCIES_SUCCESS,
  LOAD_CURRENCIES_ERROR,
  CHANGE_AMOUNT,
  LOAD_CURRENCY_DATA,
  LOAD_CURRENCY_DATA_SUCCESS,
  LOAD_CURRENCY_DATA_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_AMOUNT
 */
export function changeAmount(amount) {
  return {
    type: CHANGE_AMOUNT,
    amount,
  };
}

export function changeCurrencyAmount(amount) {
  return {
    type: CHANGE_AMOUNT,
    amount,
  };
}

/**
 * Load the currencies, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CURRENCIES
 */
export function loadCurrencies() {
  return {
    type: LOAD_CURRENCIES,
  };
}

/**
 * Dispatched when the currencies are loaded by the request saga
 *
 * @param  {array} currencies The currencies data
 *
 * @return {object} An action object with a type of LOAD_CURRENCIES_SUCCESS passing the repos
 */
export function currenciesLoaded(currencies) {
  return {
    type: LOAD_CURRENCIES_SUCCESS,
    currencies
  };
}

/**
 * Dispatched when loading the currencies fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CURRENCIES_ERROR passing the error
 */
export function currenciesLoadingError(error) {
  return {
    type: LOAD_CURRENCIES_ERROR,
    error,
  };
}

export function loadCurrencyData() {
  return {
    type: LOAD_CURRENCY_DATA
  };
}
export function currencyDataLoaded(data) {
  return {
    type: LOAD_CURRENCY_DATA_SUCCESS,
    data
  };
}
export function currencyDataError(error) {
  return {
    type: LOAD_CURRENCY_DATA_ERROR,
    error,
  };
}