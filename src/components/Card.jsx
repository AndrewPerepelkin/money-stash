import React from 'react';
import PropTypes from 'prop-types';

const Card = ({children}) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 shadow-xl p-8 min-w-full xs:min-w-[400px] '>
      {children}
    </div>
  );
};
const CardTitle = ({children, label}) => {
  return <h1 className='text-slate-800 mb-6 text-5xl '>{children || label}</h1>;
};

Card.Title = CardTitle;

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
CardTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  label: PropTypes.string
};
export default Card;
