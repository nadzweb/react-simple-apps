import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import request from 'utils/request';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';

import Toggle from 'components/Toggle';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import messages from './messages';
import CurrencyInfo from './CurrencyInfo';

import {Form, Input, Select } from './Style';

import { changeCurrencyFrom, changeCurrencyTo, changeCurrencyAmount, loadCurrencyData } from './actions';
import { makeSelectFromCurrency, makeSelectToCurrency, makeSelectCurrency, makeSelectAmount } from './selectors';

export class FxCalculatorPage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currenciesData: {}
    };
  }

  componentDidMount() {
    const requestURL = 'https://openexchangerates.org/api/currencies.json?app_id=5c2dba0f887544a4b196eeaa8a3052f4';
    var self = this;
    fetch(requestURL)
    .then((response) => response.json())
    .then(function(data) {
      self.setState({currenciesData: data});
    })
    .catch(e => e);
  }

  render() {
    let currenciesData = this.state.currenciesData;
    const currencyOptions = Object.keys(currenciesData).map(function(key) {
      return <option key={key} value={key.toString()}>{currenciesData[key]}</option>
    });
    return (
      <div className="col col-md-9">
        <Helmet
          title="Fx Calculator Page"
          meta={[
            { name: 'description', content: 'Calculate foreign currency' },
          ]}
        />
        
        <H2>
          <FormattedMessage {...messages.heading} />
        </H2>
        <FormattedMessage {...messages.blurb} />
        <Form name="fx-calculator-form" onSubmit={this.props.onSubmitForm}>
          <div className="row">
            <div className="col-3">
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="100"
                value={this.props.amount}
                onChange={this.props.onChangeAmount}
              />
            </div>

            <div className="col-3">
              <div><FormattedMessage {...messages.from} />
                <Select name="fromCurrency" value={this.props.fromCurrency} required onChange={this.props.onCurrencyFromToggle}>
                  {currencyOptions}
                </Select>
              </div>
            </div>

            <div className="col-3"> 
              <div><FormattedMessage {...messages.to} />
               <Select name="toCurrency" value={this.props.toCurrency} required onChange={this.props.onCurrencyToToggle}>
                  {currencyOptions}
                </Select>
              </div>
            </div>

          </div>
          
          <div>
            <br/>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </div>
        
        </Form>
        <CurrencyInfo info={this.props.userData} amount={this.props.amount} currencyTo={this.props.currencyTo} currencyFrom={this.props.currencyFrom} />
      </div>
    );
  }
}

FxCalculatorPage.propTypes = {
  amount: React.PropTypes.string,
  fromCurrency: React.PropTypes.string,
  toCurrency: React.PropTypes.string,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onCurrencyFromToggle: React.PropTypes.func,
  onCurrencyToToggle: React.PropTypes.func,
  onChangeAmount: React.PropTypes.func,
  onSubmitForm: React.PropTypes.func,
  userData: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectCurrency(),
  amount: makeSelectAmount(),
  currencyFrom: makeSelectFromCurrency(),
  currencyTo: makeSelectToCurrency()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAmount: (evt) => dispatch(changeCurrencyAmount(evt.target.value)),
    onCurrencyFromToggle: (evt) => dispatch(changeCurrencyFrom(evt.target.value)),
    onCurrencyToToggle: (evt) => dispatch(changeCurrencyTo(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadCurrencyData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FxCalculatorPage);