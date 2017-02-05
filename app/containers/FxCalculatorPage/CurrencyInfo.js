import React, { PropTypes } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
`;

const CurrencyInfo = ({ amount, sourceCurrency, ratedAmount, destCurrency }) =>
  <div>
    <DIV className="alert alert-success" role="alert">
      <strong>{amount} {sourceCurrency} <br/>=<br/> {ratedAmount} {destCurrency}</strong>
    </DIV>
  </div>

CurrencyInfo.propTypes = {
  amount: PropTypes.string,
  sourceCurrency: PropTypes.string,
  ratedAmount: PropTypes.string,
  destCurrency: PropTypes.string
}

export default CurrencyInfo