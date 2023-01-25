import React from 'react';
import {useSelector} from 'react-redux';
import {
  incomeListSelector,
  loadingStatusSelector
} from '../../store/incomeSlice';
import IncomeListItem from './IncomeListItem';
import IncomeСhart from './IncomeСhart';

const IncomeList = () => {
  const loadingStatus = useSelector(loadingStatusSelector());
  const income = useSelector(incomeListSelector());
  console.log(income);
  const displaySkeleton =
    loadingStatus === 'idle' || loadingStatus === 'pending';

  return (
    <>
      <h2 className='text-blue-200 bold'>Поступления:</h2>
      {displaySkeleton && <h2 className='text-white'>Loading...</h2>}
      {income &&
        !displaySkeleton &&
        income.map((item) => (
          <IncomeListItem
            key={'income-' + item.id}
            item={item}
          />
        ))}
      {income && !displaySkeleton && <IncomeСhart income={income} />}
    </>
  );
};

export default IncomeList;
