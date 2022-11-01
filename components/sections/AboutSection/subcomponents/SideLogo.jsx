import Image from 'next/image';
import React from 'react';
import s from './SideLogo.module.scss';

const SideLogo = ({ imgSrc }) => {
    return (
        <div className={s.wrap}>
            <Image
                alt="side logo" 
                src={imgSrc} 
                className={s.bolt}
            />
        </div>
    );
};

export default SideLogo;