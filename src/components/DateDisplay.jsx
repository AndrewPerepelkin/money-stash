import React from 'react';
// eslint-disable-next-line react/prop-types
const DateDisplay = ({value}) => {
  const displayDate = new Date(value).toLocaleDateString('ru-ru', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return <time dateTime={value}>{displayDate}</time>;
};

export default DateDisplay;
