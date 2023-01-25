import React from 'react';
import PropTypes from 'prop-types';
import DateDisplay from '../DateDisplay';

const IncomeListItem = ({item}) => {
  const {
    // id,
    attributes: {name, 'created-at': createdAt, amount}
  } = item;
  return (
    <div className='container flex flex-col start text-blue-100'>
      <h3>{name}</h3>
      <p>{amount}</p>
      <dl>
        <dd>
          <DateDisplay value={createdAt} />
        </dd>
      </dl>
    </div>

    // <article className='relative group'>

    //   <div className='relative'>
    //     <h3 className='text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0'>
    //       {name}
    //     </h3>
    //     <div className='mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2'>
    //       <p>{amount}</p>
    //     </div>
    //     <dl className='absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]'>
    //       <dd className='whitespace-nowrap text-sm leading-6 dark:text-slate-400'>
    //         <DateDisplay value={createdAt} />
    //       </dd>
    //     </dl>
    //   </div>
    // </article>

    // <div className='text-white'>
    //   {id} - {name} - сумма: {amount} - дата - {createdAt}
    // </div>
  );
};

IncomeListItem.propTypes = {
  item: PropTypes.object
};

export default IncomeListItem;
