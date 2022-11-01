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
import { scroller } from 'react-scroll';
import { SCROLL_ELEMENT_NAMES } from '../../../utils/constants';


const items = [
    {
        title: "Projects",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.PROJECTS_SECTION, {
            smooth: true,
            offset: window.innerWidth > 440 ? 100 : 170,
            duration: 500
        }),
        icon: <ImportantDevicesIcon className={s.icon}/>
    }, 
    {
        title: "Experience",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.EXPERIENCE_SECTION, {
            smooth: true,
            offset: 50,
            duration: 700
        }),
        icon: <BuildIcon className={s.icon}/>
    },
    {
        title: "Skills",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.SKILLS_SECTION, {
            smooth: true,
            offset: 80,
            duration: 700
        }),
        icon: <AnimationIcon className={s.icon}/>
    },
    {
        title: "Education",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.EDUCATION_SECTION, {
            smooth: true,
            offset: window.innerWidth > 440 ? 140: 50,
            duration: 700
        }),
        icon: <SchoolIcon className={s.icon}/>
    },
    {
        title: "About Me",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.ABOUT_SECTION, {
            smooth: true,
            offset: window.innerWidth > 440 ? 50 : -10,
            duration: 800
        }),
        icon: <PsychologyIcon className={s.icon}/>
    },
    {
        title: "Resume",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.RESUME_SECTION, {
            smooth: true,
            offset: -40,
            duration: 800
        }),
        icon: <FileDownloadIcon className={s.icon}/>
    },
    {
        title: "Get In Touch",
        scrollToElement: () => scroller.scrollTo(SCROLL_ELEMENT_NAMES.EMAIL_SECTION, {
            smooth: true,
            offset: window.innerWidth > 440 ? 150 : 50,
            duration: 800
        }),
        icon: <EmailIcon className={s.icon}/>
    }
]
const SideMenu = ({ open }) => {
    return (
        <List>
            {
                items.map((item, idx) => (
                    <ListItem onClick={() => item.scrollToElement()} key={idx} button>
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