import { Button } from '@mui/material';
import React from 'react';
import s from './ProjectsTitle.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';

const ViewGithub = () => {
    return (
        <div className={s.topLevelWrap} style={{marginTop: '10rem'}}>
            <div className={s.wrap} style={{flexDirection: 'column', padding: '2rem 0'}}>
                <h2 style={{marginTop: '0'}}>VIEW OTHER PROJECTS</h2>
                <Button variant="outlined" size="large" href="https://github.com/jasoncarrillo0" target="_blank" endIcon={<GitHubIcon/>}>Github Profile</Button>
            </div>
        </div>
    );
};

export default ViewGithub;