import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import s from './Footer.module.scss';

const Footer = () => {
    
    const btnStyle = {
        border: '0.5px solid white',
        borderRadius: '50%'
    }
    return (
        <footer className={s.wrap}>
            <div className={s.btns}>
                <IconButton href="https://www.linkedin.com/in/jason-carrillo/" target="_blank" sx={btnStyle}>
                    <LinkedInIcon/>
                </IconButton>
                <IconButton href="https://github.com/jasoncarrillo0" target="_blank" sx={btnStyle}>
                    <GitHubIcon/>
                </IconButton>

            </div>

        </footer>
    );
};

export default Footer;