import {
  LOAD_CURRENCIES,
  LOAD_CURRENCIES_SUCCESS,
  LOAD_CURRENCIES_ERROR,
  CHANGE_AMOUNT,
  CHANGE_CURRENCY_FROM,
  CHANGE_CURRENCY_TO,
  LOAD_CURRENCY_DATA,
  LOAD_CURRENCY_DATA_SUCCESS,
  LOAD_CURRENCY_DATA_ERROR,
} from './constants';


export function changeCurrencyFrom(currency) {
  return {
    type: CHANGE_CURRENCY_FROM,
    currency,
  };
}

export function changeCurrencyTo(currency) {
  return {
    type: CHANGE_CURRENCY_TO,
    currency,
  };
}

export function changeCurrencyAmount(amount) {
  return {
    type: CHANGE_AMOUNT,
    amount,
  };
}

export function loadCurrencies() {
  return {
    type: LOAD_CURRENCIES,
  };
}

export function currenciesLoaded(currencies) {
  return {
    type: LOAD_CURRENCIES_SUCCESS,
    currencies
  };
}

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