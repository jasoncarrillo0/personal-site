import React, {useEffect, useState} from 'react';
import s from './Motivation.module.scss';
import MotivationTitle from './subcomponents/MotivationTitle';
import SideLogo from './subcomponents/SideLogo';
import boltImg from '../../../public//about/motivation.png';
import { isSafari, fullBrowserVersion } from 'react-device-detect';
import { isOldSafari } from '../../helpers';
import { SCROLL_ELEMENT_NAMES } from '../../../utils/constants';
import { Element } from 'react-scroll'
const Motivation = () => {
    const oldSafari = isOldSafari(isSafari, fullBrowserVersion);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
      
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    });
    return (
        <Element name={SCROLL_ELEMENT_NAMES.ABOUT_SECTION}>
            <section className={s.wrap}>
                <div className={s.main}>
                    <SideLogo imgSrc={boltImg}/>
                    <div className={s.textArea} style={oldSafari && width > 768 ? { marginLeft: '3rem'} : {}}>
                        <MotivationTitle/>
                        <p>
                            Simply put, I love to build things that make a measurable difference. The achiever in me finds huge satisfaction in performance optimization.
                            On top of that, I gain a sense of accomplishment knowing what I'm building genuinely helps people, whether its an internal company web app,
                            or a customer-facing application. I'm a people person, so working with and serving people is a motivator for me.
                        </p>
                        <p>
                            Areas of interest: distributed systems. This is the next area I'd like to break into, especially using industry standard tools like Apache Kafka and Kubernetes.
                        </p>
                    </div>
                </div>
                <div className={s.after}>
                </div>
            </section>
        </Element>
    );
};

export default Motivation;