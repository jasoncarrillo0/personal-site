import Image from 'next/image';
import React from 'react';
import s from './Skill.module.scss';




const Skill = ({ imageSrc, name }) => {
    return (
        <div className={s.wrap}>
            <Image
                src={imageSrc}
                alt="code logo"
                
            />
            <p>{name}</p>
        </div>
    );
};

export default Skill;