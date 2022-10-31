import React from 'react';
import s from './ColorDirectional.module.scss';
import svg from '../../../public/bottom-3200.svg';

const ColorDirectional = () => {
    return (
        <div 
            className={s.wrap}
            style={{backgroundImage: `url(${svg})`}}
        >
            
        </div>
    );
};

export default ColorDirectional;