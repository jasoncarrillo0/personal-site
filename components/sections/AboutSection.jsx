import React from 'react';
import s from './AboutSection.module.scss';
import FunFacts from './AboutSection/FunFacts';
import Motivation from './AboutSection/Motivation';
import ExperienceTitle from './ExperienceSection/ExperienceTitle';
import Education from './AboutSection/Education';

const AboutSection = () => {

    return (
        <div className={s.wrap}>
            <ExperienceTitle title="ABOUT ME..."/>
            <div className={s.sectionWrap}>
                <Education/>
                <Motivation/>
                <FunFacts/>
            </div>
        </div>
    );
};

export default AboutSection;