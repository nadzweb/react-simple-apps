/**
 * Component selectors
 */

import { createSelector } from 'reselect';

const calculatorState = (state) => state.get('fxcalculator');

const makeSelectCurrency = () => createSelector(
  calculatorState,
  (calculatorState) => calculatorState.getIn(['userData', 'data']),
);

const makeSelectAmount = () => createSelector(
  calculatorState,
  (calculatorState) => calculatorState.get('amount')
);

const makeSelectFromCurrency = () => createSelector(
  calculatorState,
  (calculatorState) => calculatorState.get('currencyFrom')
);

const makeSelectToCurrency = () => createSelector(
  calculatorState,
  (calculatorState) => calculatorState.get('currencyTo')
);

export {
  calculatorState,
  makeSelectAmount,
  makeSelectCurrency,
  makeSelectFromCurrency,
  makeSelectToCurrency
};