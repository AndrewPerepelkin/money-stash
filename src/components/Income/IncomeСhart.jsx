import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../../utils/pieChart';

const IncomeСhart = ({income}) => {
  const incomeArray = income.map((item) => ({
    label: item.attributes.name,
    value: parseFloat(item.attributes.amount)
  }));
  console.log(incomeArray);
  const chart = PieChart({
    data: incomeArray,
    outerRadius: 200,
    innerRadius: 50
  });
  return <>{chart}</>;
};

IncomeСhart.propTypes = {
  income: PropTypes.array
};

export default IncomeСhart;
