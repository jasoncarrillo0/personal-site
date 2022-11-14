import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import NestedModal from '../reusable/NestedModal';
import s from './Btns.module.scss'

const DemoBtn = ({ link }) => {
    const [open, setOpen] = useState(false);

    const naggiarNote = "Please note, this project may have changed since I exited the project in May 2021. Code may have changed. It also appears that the client isn't paying for the external API subscription, so the quoting functionality isn't operational. When I checked the site last (Dec 2020), all other parts of the site seem to be working well.";
    const crwnNote    = "It may take some time to load, since the app is hosted on a free Heroku app account.";
    useEffect(() => {
        return () => {
            setOpen(false);
        }
    }, []);

    const BtnWithModal = ({ siteLink, note }) => {
        return (
            <>
                <Button 
                    size="small"
                    className={s.wrap}
                    onClick={() => setOpen(true)}
                    variant="contained" 
                    endIcon={<TransitEnterexitIcon sx={{transform: 'scale(-1, -1)'}}/>}
                    target="_blank"
                >
                    View Site
                </Button>
                <NestedModal 
                    open={open} 
                    setOpen={setOpen}
                    note={note}
                    link={link}
                />
            </>
        )
    }
    
    if (link === "http://shop.naggiar.net/") {
        return (
            <BtnWithModal siteLink={link} note={naggiarNote}/>
        )
    } else if (link === "http://ecom-crown-clothing.herokuapp.com/") {
        return (
            <BtnWithModal siteLink={link} note={crwnNote}/>
        )
    } else {
        return (
            <Button 
                size="small"
                className={s.wrap}
                href={link}
                variant="contained" 
                endIcon={<TransitEnterexitIcon sx={{transform: 'scale(-1, -1)'}}/>}
                target="_blank"
            >
                View Site
            </Button>
        );
    }
    
};

export default DemoBtn;