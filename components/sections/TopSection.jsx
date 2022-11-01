import React from 'react';
import s from './TopSection.module.scss';
import Greeting from './TopSection/Greeting';
import svgBackground from '../../public/top-3200.svg';

const TopSection = ({}) => {
    return (
        <div className={s.background}>
            <div 
                className={s.backgroundOverlay}
                style={{backgroundImage: `url(${svgBackground.src})`}}
            ></div>
            <Greeting/>
        </div>
    );
};

export default TopSection;