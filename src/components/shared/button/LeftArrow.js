import React from 'react';
import LeftArrowSvg from '../../../assets/svg/arrow-left.svg';
const LeftArrow = () => (
  <img
    src={LeftArrowSvg}
    alt="Arrow-Svg"
    style={{
      padding: '.5rem',
      borderRadius: '50%',
      border: '1px solid lightGrey',
    }}
  />
);

export default LeftArrow;