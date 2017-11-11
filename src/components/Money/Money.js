import React from 'react';

export default (props) => {

  const dict = { 'USD': '$', 'EUR': '€', 'GBP': '£', 'RUB': '₽' };

  let value = '' + props.value,
    left = (value.indexOf('.') != -1) ? <span>{value.substring(0, value.indexOf('.'))}</span> : <span>{value}</span>,
    right = (value.indexOf('.') != -1) ? <span>{',' + value.substring(value.indexOf('.') + 1)}</span> : null,
    currency = (props.currency) ? <span>{dict[props.currency]}</span> : null;

  return <span>
    {left}
    {right}
    {currency}
  </span>
};  