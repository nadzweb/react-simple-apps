import React, { PropTypes } from 'react';
import {filter} from 'lodash';
import styled from 'styled-components';

const DIV = styled.div`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
`;
const Disclaimer = styled.div`
  font-size: 11px;
  line-height: 12px;
  color: #aaa;
  margin-bottom:20px;
`;

function CurrencyInfo(data) {
  if(data && data.info) {
    if(data.info.rates) {
      var currencyCalc = { from:1, to:1 };

      _.filter(data.info.rates, function(v,k){
        if(k==data.currencyFrom) currencyCalc.from = v;
        if(k==data.currencyTo) currencyCalc.to = v;
      });
      const calcAmount = ((parseFloat(data.amount)/currencyCalc.from) * currencyCalc.to).toFixed(2);
      return (
      <div>
        <DIV className="alert alert-success" role="alert">
          <strong>{data.amount} {data.currencyFrom} <br/>=<br/> {calcAmount} {data.currencyTo}</strong>
        </DIV>
        <Disclaimer>
          <strong>Disclaimer</strong><br/>
          {data.info.disclaimer}
        </Disclaimer>
        <Disclaimer>
          <strong>License</strong><br/>
          {data.info.license}
        </Disclaimer>
      </div>
      )
    }
  }
  return null;
};

CurrencyInfo.propTypes = {
  data: PropTypes.any,
  amount: PropTypes.string,
  toCurrency: PropTypes.string,
  fromCurrency: PropTypes.string
};

export default CurrencyInfo