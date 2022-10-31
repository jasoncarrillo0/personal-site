import React from 'react';
import s from './Skill.module.scss';




const Skill = ({ imageSrc, name }) => {
    return (
        <div className={s.wrap}>
            <img src={imageSrc}/>
            <p>{name}</p>
        </div>
    );
};

export default Skill;