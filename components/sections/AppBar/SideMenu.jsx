import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import BuildIcon from '@mui/icons-material/Build';
import AnimationIcon from '@mui/icons-material/Animation';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import s from './SideMenu.module.scss';
const items = [
    {
        title: "Projects",
        icon: <ImportantDevicesIcon className={s.icon}/>
    }, 
    {
        title: "Experience",
        icon: <BuildIcon className={s.icon}/>
    },
    {
        title: "Skills",
        icon: <AnimationIcon className={s.icon}/>
    },
    {
        title: "Education",
        icon: <SchoolIcon className={s.icon}/>
    },
    {
        title: "About Me",
        icon: <PsychologyIcon className={s.icon}/>
    },
    {
        title: "Resume",
        icon: <FileDownloadIcon className={s.icon}/>
    },
    {
        title: "Get In Touch",
        icon: <EmailIcon className={s.icon}/>
    }
]
const SideMenu = ({ open }) => {

    function handleClick(item) {
    
        
    }
    return (
        <List>
            {
                items.map((item, idx) => (
                    <ListItem onClick={() => handleClick(item.title)} key={idx} button>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText className={s.text}>
                            {item.title}
                        </ListItemText>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default SideMenu;