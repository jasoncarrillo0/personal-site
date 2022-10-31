import React from 'react';
import s from './ExperienceTitle.module.scss';
const ExperienceTitle = ({ title, backgroundColor }) => {
    return (
        <div className={s.wrap}>
            <div className={s.line}>
                <hr/>
            </div>
            <div className={s.diamondWrap}>
                <h1 style={{backgroundColor}} className={s.diamond}>{title}</h1>
            </div>
            <div className={s.diamondWrapCopy}>
                <h1 style={{backgroundColor}} className={s.diamondCopy}>EXPERIENCE</h1>
            </div>
        </div>
    );
};

export default ExperienceTitle;