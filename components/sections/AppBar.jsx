import React, { useState } from 'react';
import s from './AppBar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import SideMenu from './AppBar/SideMenu';
import Box from '@mui/material/Box';

const AppBar = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className={s.wrap}>
            <div className={s.iconWrap}>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon className={s.icon}/>
                </IconButton>
            </div>
            <Drawer ModalProps={{keepMounted: true}} sx={{zIndex: '9999'}} anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{width: '225px'}} role="presentation" onClick={() => setOpen(false)}>
                    <SideMenu/>
                </Box>
            </Drawer>
        </div>
    );
};

export default AppBar;