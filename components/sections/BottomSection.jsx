import React from 'react';
import s from  './BottomSection.module.scss';
import ColorDirectional from './BottomSection/ColorDirectional';
import ContactForm from './BottomSection/ContactForm';
import ResumeTitle from './BottomSection/ResumeTitle';
import ContactCta from './BottomSection/ContactCta';

const BottomSection = () => {
    return (
        <div className={s.wrap}>
            <ResumeTitle/>
            <ColorDirectional/>
            <ContactCta/>
            <ContactForm/>
        </div>
    );
};

export default BottomSection;