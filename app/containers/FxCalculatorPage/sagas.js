/**
 * Gets currencies and currency data
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import { currencyDataLoaded, currencyDataError } from './actions';
import { LOAD_CURRENCY_DATA } from './constants';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/GithubPage/selectors';

export function* getCurrencies() {
  // get list of currencies
  const requestURL = 'https://openexchangerates.org/api/currencies.json?app_id=5c2dba0f887544a4b196eeaa8a3052f4';
  //http://openexchangerates.org/api/latest.json?app_id=5c2dba0f887544a4b196eeaa8a3052f4
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
  const requestURL = 'http://openexchangerates.org/api/latest.json?app_id=5c2dba0f887544a4b196eeaa8a3052f4';
  
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(currencyDataLoaded(data));
  } catch (err) {
    yield put(currencyDataError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS, getRepos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* currencyData() {
  const watcher = yield takeLatest(LOAD_CURRENCY_DATA, getCurrencyData);
  console.log(watcher);
  //yield take(LOCATION_CHANGE);
  //yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
  currencyData
];
