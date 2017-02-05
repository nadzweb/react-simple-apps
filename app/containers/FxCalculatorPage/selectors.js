/**
 * Component selectors
 */

import { createSelector } from 'reselect';

const calculatorState = (state) => state.get('fxcalculator');

const makeSelectCurrency = () => createSelector(
  calculatorState,
  (currencyState) => currencyState.getIn(['userData', 'data'])
  //(globalState) => globalState.getIn(['userData', 'repositories'])
);

export {
  calculatorState,
  makeSelectCurrency,
};