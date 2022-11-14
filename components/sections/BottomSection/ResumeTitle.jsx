import { Button } from '@mui/material';
import React from 'react';
import s from './ResumeTitle.module.scss';
import { Element } from 'react-scroll'
import { SCROLL_ELEMENT_NAMES } from '../../../utils/constants';
const ResumeTitle = () => {

    return (
        <Element name={SCROLL_ELEMENT_NAMES.RESUME_SECTION}>
            <section className={s.topLevelWrap}>
                <div className={s.wrap}>
                    <h1>RESUME</h1>
                    <div className={s.btns}>
                        <Button href={"https://docs.google.com/document/d/1NHKPxcB73xFLRJ06Vf6Ju7utLL97Z-fo"} target="_blank" size="large" variant="outlined">View/Download</Button>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default ResumeTitle;
