import React, { useState, useEffect } from 'react';
import s from './Education.module.scss';
import EducationTitle from './subcomponents/EducationTitle';
import brainImg from '../../../public/about/brain-img.png';
import SideLogo from './subcomponents/SideLogo';
import sdsu from '../../../public/education/sdsu-logo.png';
import gross from '../../../public/education/logo-grossmont.png';
import SchoolCard from './subcomponents/SchoolCard';
import { isSafari, fullBrowserVersion} from 'react-device-detect';
import { isOldSafari } from '../../helpers';
import { Element } from 'react-scroll'
import { SCROLL_ELEMENT_NAMES } from '../../../utils/constants';
const educations = [
    {
        imageSrc: sdsu,
        degree: "B.B.A., Management Information Systems"
    },
    {
        imageSrc: gross,
        degree: "A.S., Computer Programming"
    }
];

const Education = () => {
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
        <Element name={SCROLL_ELEMENT_NAMES.EDUCATION_SECTION}>
            <section className={s.wrap}>
                <div className={s.before}></div>
                <div className={s.main} >
                    <div className={s.textArea} style={oldSafari && width > 768 ? {marginRight: '3rem'} : {}}>
                        <EducationTitle/>
                        <div className={s.cardWrap}>
                        {
                            educations.map((e, i) => <SchoolCard key={i} {...e}/>)
                        }
                        </div>
                    </div>
                    <SideLogo imgSrc={brainImg}/>
                </div>
                <div className={s.after}>
                </div>
            </section>
        </Element>
    );
};

export default Education;