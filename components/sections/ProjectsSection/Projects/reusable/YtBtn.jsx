import React from 'react';
import Button from '@mui/material/Button';
import YoutubeIcon from '@mui/icons-material/YouTube';
import s from './Btns.module.scss'


const YtBtn = ({ link }) => {
    return (
        <Button className={s.wrap} size="small" href={link} variant="contained" endIcon={<YoutubeIcon/>} target="_blank">
            View Demo
        </Button>
    );
};

export default YtBtn;