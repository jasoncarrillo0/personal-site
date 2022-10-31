import Chip from '@mui/material/Chip';
import React from 'react';
import s from './Techstack.module.scss';
import BoltIcon from '@mui/icons-material/Bolt';
import { isOldSafari } from '../../../../helpers';
import {isSafari, browserVersion} from 'react-device-detect';
const Techstack = ({ techs }) => {

    const oldSafari = isOldSafari(isSafari, browserVersion)
    const gapSub    = {
        margin: '0 -1rem'
    }
    const chipStyles = {backgroundColor: "#259adf"};
    if (oldSafari) {
        chipStyles.margin = '0.5rem';
    }
    return (
        <div className={s.wrap}>
            <h3>Technologies Used</h3>
            <hr/>
            <div className={s.techWrap} style={oldSafari ? gapSub : {}}>
            {
                techs.map((tech, i) => <Chip key={i} sx={chipStyles} label={tech} icon={<BoltIcon/>}/>)
            }
            </div>
            
        </div>
    );
};

export default Techstack;