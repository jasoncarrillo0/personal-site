import React, { useEffect, useState } from 'react';
import s from './FunFacts.module.scss';
import FunFactsTitle from './subcomponents/FunFactsTitle';
import brainImg from '../../../public/about/brain-img.png';
import SideLogo from './subcomponents/SideLogo';
import { isSafari, fullBrowserVersion } from 'react-device-detect';
import { isOldSafari } from '../../helpers';
const FunFacts = () => {

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
        <div className={s.wrap}>
            <div className={s.main}>
                <div className={s.textArea} style={oldSafari && width > 768 ? {marginRight: '3rem'} : {}}>
                    <FunFactsTitle/>
                    <p>
                        <ul style={{direction: 'rtl', paddingInlineStart: '20px'}}>
                            <li>I'm married to my beautiful wife Layal</li>
                            <li>I've lived overseas for more than 3 years</li>
                            <li>I'm a voracious reader</li>
                            <li>I'm a classical pianist</li>
                            <li>I love playing football (soccer, if you're American)</li>
                            <li>(; I'm also a gym rat</li>
                        </ul>
                    </p>
                </div>
                <SideLogo imgSrc={brainImg}/>

            </div>
            <div className={s.after}>

            </div>
        </div>
    );
};

export default FunFacts;