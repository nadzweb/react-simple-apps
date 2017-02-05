import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import Toggle from 'components/Toggle';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import messages from './messages';
import CurrencyInfo from './CurrencyInfo';

import {Form, Input } from './Style';

import { loadRepos } from '../App/actions';
import { changeAmount, changeCurrencyAmount, loadCurrencyData } from './actions';
import { makeSelectCurrency } from './selectors';
export const appLocales = [
  'Australi Dollars',
  'NZ Dollars',
];


export class FxCalculatorPage extends React.PureComponent {
  
  componentDidMount() {
    //return false;
  }

  render() {
    const mydata = '100';
    const { loading, error, currencyInfoData } = this.props;
    const currencyInfoProps = {
      loading,
      error,
      currencyInfoData,
    };
    console.log(this.props.amount);
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
                type="number"
                placeholder="100"
                value={this.props.amount}
                onChange={this.props.onChangeAmount}
              />
            </div>

            <div className="col-3">
              <div>From:
                <Toggle value={this.props.currencies} values={appLocales} messages={messages} onToggle={this.props.onCurrencyToggle} />
              </div>
            </div>

            <div className="col-3"> 
              <div>To:
                <Toggle value={this.props.currencies} values={appLocales} messages={messages} onToggle={this.props.onCurrencyToggle} />
              </div>
            </div>

          </div>
          
          <div>
            <br/>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </div>
        
        </Form>
        --start--
        
         
         {([this.props.userData.rates]).map(function(name, index){
              <span key={ index }>{name} - {index}</span>
          })}
        -- end--
        <CurrencyInfo userData="{this.props.userData}" amount="100" ratedAmount="97" sourceCurrency="NZD" destCurrency="AUD" />
      </div>
    );
  }
}

FxCalculatorPage.propTypes = {
  amount: React.PropTypes.string,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  currencyInfoData: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onCurrencyToggle: React.PropTypes.func,
  onChangeAmount: React.PropTypes.func,
  onSubmitForm: React.PropTypes.func,
  userData: React.PropTypes.object,
};

const mapStateToProps = createSelector(
  makeSelectCurrency(),
  (userData) => ({ userData }),
  
);

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAmount: (evt) => dispatch(changeCurrencyAmount(evt.target.value)),
    onCurrencyToggle: (evt) => dispatch(changeCurrency(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadCurrencyData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FxCalculatorPage);