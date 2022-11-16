import React from 'react';
import s from './Greeting.module.scss';

const Greeting = () => {
    return (
        <div className={s.wrap}>
            <h1 className={s.title}>Hi, I'm Jason</h1>
            <p className={s.punchline}>Full Stack Web Developer</p>
            <p className={s.punchline}>Boosting the bottom line through high-quality software.</p>
        </div>
    );
};

export default Greeting;