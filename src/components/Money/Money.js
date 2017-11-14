import React from 'react';
const dict = { USD: '$', EUR: '€', GBP: '£', RUB: '₽' };

export default (props) => {
  let [left, right] = props.value.toString().split('.');

  return <span>
    {(left) ? <span>{left}</span> : null}
    {(right) ? <span>,{right}</span> : null}
    {(props.currency) ? <span>{dict[props.currency]}</span> : null}
  </span>
};  