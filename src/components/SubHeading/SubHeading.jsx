import React from 'react';

const SubHeading = ({subTitle, title}) => (
  <div>
    <h5 className='sec_h5'>{subTitle}</h5>
    <h2 className='sec_h2'>{title}</h2>
  </div>
);

export default SubHeading;
