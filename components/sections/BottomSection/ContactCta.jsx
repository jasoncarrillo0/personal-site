import React from 'react';
import s from  './ContactCta.module.scss';
import { Element } from 'react-scroll'
import { SCROLL_ELEMENT_NAMES } from '../../../utils/constants';
const ContactCta = () => {
    return (
        <Element name={SCROLL_ELEMENT_NAMES.EMAIL_SECTION}>
            <section className={s.topLevelWrap}>
                <div className={s.mainWrap}>
                    <h1>GET IN TOUCH</h1>
                    <p>Questions or comments? Please don't hesistate to contact me.</p>
                </div>
            </section>
        </Element>
    );
};

export default ContactCta;