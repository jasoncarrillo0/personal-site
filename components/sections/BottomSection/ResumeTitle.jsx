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
                        <Button href={"https://docs.google.com/document/d/1P10L7aKSFux3EltJ4CdIa1SoPajvkKwPaKOildnhpog/edit?usp=sharing"} target="_blank" size="large" variant="outlined">DOCX VERSION</Button>
                        <Button href={"https://drive.google.com/file/d/1jVJrV4Q_VV0OV3s3WuxKP65ROnatrqYI/view?usp=sharing"} target="_blank" size="large" variant="outlined">PDF VERSION</Button>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default ResumeTitle;
