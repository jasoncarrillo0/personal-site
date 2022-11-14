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
                            Simply put, I love to build things that make a measurable difference, particularly on systems. I enjoy the satisfaction of achieving measurable improvement.
                            On top of that, I gain a sense of satisfaction knowing what I'm building genuinely helps people, whether its an internal company web app,
                            or a customer-facing application. I'm a people person, so working with and serving people is a motivator for me.
                        </p>
                        <p>
                            I'm very excited about systems design opportunities. This is an area I want to break into, and to get the chance to manage large scale systems would be amazing. I want to make
                            a large impact, but I also really enjoy optimizing things.
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