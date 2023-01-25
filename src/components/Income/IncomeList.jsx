import React from 'react';
import {useSelector} from 'react-redux';
import {
  incomeListSelector,
  loadingStatusSelector
} from '../../store/incomeSlice';
import IncomeListItem from './IncomeListItem';

const IncomeList = () => {
  const loadingStatus = useSelector(loadingStatusSelector());
  const income = useSelector(incomeListSelector());

  const displaySkeleton =
    loadingStatus === 'idle' || loadingStatus === 'pending';

  return (
    <>
      {displaySkeleton && <h2 className='text-white'>Loading...</h2>}
      {income &&
        !displaySkeleton &&
        income.map((item) => (
          <IncomeListItem
            key={'income-' + item.id}
            item={item.attributes}
          />
        ))}
    </>
  );
};

export default IncomeList;
