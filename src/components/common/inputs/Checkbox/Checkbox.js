import React from 'react';
import SvgRender from '../../SvgRender';
import check from 'assets/icons/svg/check.svg';
import './Checkbox.scss';

const Checkbox = ({               value, className, onClick, style }) => {
  return (
    
    <div className={`checkbox ${className ? className : ''}`} onClick={onClick} style={style}>
      {value ? (
        <SvgRender path={check} style={{ fill: 'black', height: '16px', width: '16px' }} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Checkbox;
