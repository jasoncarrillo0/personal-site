import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import s from './Btns.module.scss'


const GitHubBtn = ({ link }) => {
    return (
        <Button className={s.wrap} size="small" href={link} variant="contained" endIcon={<GitHubIcon/>} target="_blank">
            View Code
        </Button>
    );
};

export default GitHubBtn;