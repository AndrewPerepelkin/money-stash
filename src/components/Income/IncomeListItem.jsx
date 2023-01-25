import React from 'react';
import PropTypes from 'prop-types';

const IncomeListItem = ({item}) => {
  return (
    <div className='text-white'>
      <h1>Поступления:</h1>
      {item.name} - сумма: {item.amount}
    </div>
  );
};

IncomeListItem.propTypes = {
  item: PropTypes.object
};

export default IncomeListItem;
