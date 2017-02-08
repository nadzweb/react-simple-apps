/**
 * Gets currencies and currency data
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import { currencyDataLoaded, currencyDataError } from './actions';
import { LOAD_CURRENCIES, LOAD_CURRENCY_DATA } from './constants';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/GithubPage/selectors';
// appId for nadzweb.com
const appId = 'ab1ec0f1003b425b8c753bc262fddcbb';

export function* getCurrencies() {
  // get list of currencies
  const requestURL = 'https://openexchangerates.org/api/currencies.json?app_id='+appId;
  try {
    // Call our request helper (see 'utils/request')
    const currencies = yield call(request, requestURL);
    yield put(currenciesLoaded(repos, username));
  } catch (err) {
    yield put(currenciesLoadingError(err));
  }
}

export function* getCurrencyData() {
  // get currency data
  const requestURL = 'http://openexchangerates.org/api/latest.json?app_id='+appId;
  
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(currencyDataLoaded(data));
  } catch (err) {
    yield put(currencyDataError(err));
  }
}

export function* currencyData() {
  const watcher = yield takeLatest(LOAD_CURRENCY_DATA, getCurrencyData);
}

export function* currencies() {
  const watcher = yield takeLatest(LOAD_CURRENCIES, getCurrencies);
}

// Bootstrap sagas
export default [
  currencies,
  currencyData
];
