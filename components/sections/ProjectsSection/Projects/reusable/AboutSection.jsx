import { Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import s from './AboutSection.module.scss';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { IMAC_WIDTH } from '../../../../helpers';


const AboutSection = ({ about, about2=null }) => {

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
        <Paper className={s.wrap}>
            <div className={s.innerWrap}>
                <div className={s.titleWrap}>
                    <div className={s.title}>
                        <h4>About the project</h4>
                        <LocalLibraryIcon fontSize={width >= IMAC_WIDTH ? "19px" : ""}/>
                    </div>
                    <hr/>
                </div>
                <p style={about2 && {marginBottom: '2rem'}}>{about}</p>
                <p>{about2}</p>
            </div>
        </Paper>
    );
};

export default AboutSection;