/*
 * Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_CURRENCIES = 'simpleReactApps/FxCalculatorPage/LOAD_CURRENCIES';
export const LOAD_CURRENCIES_SUCCESS = 'simpleReactApps/FxCalculatorPage/LOAD_CURRENCIES_SUCCESS';
export const LOAD_CURRENCIES_ERROR = 'simpleReactApps/FxCalculatorPage/LOAD_CURRENCIES_ERROR';

export const LOAD_CURRENCY_DATA = 'simpleReactApps/FxCalculatorPage/LOAD_CURRENCY_DATA';
export const LOAD_CURRENCY_DATA_SUCCESS = 'simpleReactApps/FxCalculatorPage/LOAD_CURRENCY_DATA_SUCCESS';
export const LOAD_CURRENCY_DATA_ERROR = 'simpleReactApps/FxCalculatorPage/LOAD_CURRENCY_DATA_ERROR';


export const CHANGE_AMOUNT = 'simpleReactApps/FxCalculatorPage/CHANGE_AMOUNT';
export const CHANGE_CURRENCY_FROM = 'simpleReactApps/FxCalculatorPage/CHANGE_CURRENCY_FROM';
export const CHANGE_CURRENCY_TO = 'simpleReactApps/FxCalculatorPage/CHANGE_CURRENCY_TO';
