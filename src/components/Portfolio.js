import React from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import CurrencyListItem from './shared/CurrencyListItem';
import FlexContainer from './shared/FlexContainer';

const Portfolio = ({ currencyAmounts, prices }) =>
  <section className="section">
    <h1 className="title has-text-centered">
      Total Portfolio:{' '}
      {currencyFormatter.format(currencyAmounts.map((a, i) => a.amount * prices[i]).reduce((a, b) => a + b), {
        code: 'USD',
      })}
    </h1>
    <div>
      {currencyAmounts.map((amount, i) =>
        <FlexContainer key={amount.name}>
          <CurrencyListItem {...amount} key={amount.name}>
            {amount.fullName}
          </CurrencyListItem>
          <span>
            {currencyFormatter.format(amount.amount * prices[i], { code: 'USD' })}
          </span>
        </FlexContainer>,
      )}
    </div>
  </section>;

Portfolio.propTypes = {
  currencyAmounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Portfolio;
