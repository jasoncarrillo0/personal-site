import { Paper } from '@mui/material';
import React from 'react';
import { isOldSafari } from '../../../helpers';
import s from './SchoolCard.module.scss';
import { isSafari, fullBrowserVersion } from 'react-device-detect';
const SchoolCard = ({ imageSrc, degree }) => {
    const imgStyle = {
        maxHeight: "77px"
    }

    const oldSafari     = isOldSafari(isSafari, fullBrowserVersion);

    return (
        <Paper className={s.wrap} style={oldSafari ? {marginBottom: '3rem'} : {}}>
            <img style={ degree.includes("Management") ? imgStyle : {}} src={imageSrc}/>
            <p className={s.degreeClass}>{degree}</p>
        </Paper>
    );
};

export default SchoolCard;