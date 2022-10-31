import React from 'react';
import s from  './ContactCta.module.scss';

const ContactCta = () => {
    return (
        <div className={s.topLevelWrap}>
            <div className={s.mainWrap}>
                <h1>GET IN TOUCH</h1>
                <p>Questions or comments? Please don't hesistate to contact me.</p>
            </div>
        </div>
    );
};

export default ContactCta;