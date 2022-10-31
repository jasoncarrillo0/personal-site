import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import s from './Modal.module.scss';
import StorageIcon from '@mui/icons-material/Storage';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import BuildIcon from '@mui/icons-material/Build';
import PrimaryInfo from './reusable/PrimaryInfo';
import AboutSection from './reusable/AboutSection';
import Techstack from './reusable/Techstack';
import { IMAC_WIDTH, isOldSafari } from '../../../helpers';
import { isSafari, fullBrowserVersion } from 'react-device-detect';
const style = {
    bgcolor: 'background.paper',
};



const ProjectModal = ({ 
    open, 
    setOpen, 
    title, 
    frontendInfo, 
    backendInfo, 
    purpose, 
    technologies,
    about, 
    about2=null,
    gitLinkFrontend=null,
    gitLinkBackend=null,
    siteLink=null,
    ytLink=null
}) => {


    const oldSafari = isOldSafari(isSafari, fullBrowserVersion);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
      
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    });
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style} className={s.wrap}>
                    <h2>{title}</h2>
                    <table>
                        <tr style={oldSafari ? { margin: '-1rem 0'} : {}}>
                            <PrimaryInfo
                                title="Frontend" 
                                info={frontendInfo}
                                icon={<ImportantDevicesIcon fontSize={width >= IMAC_WIDTH ? "19px" : ""}/>}
                                gitLink={gitLinkFrontend}
                                ytLink={ytLink}
                                ytBtn={ytLink ? true : false}
                                demoLink={siteLink}
                                oldSafari={oldSafari}
                            />
                            <PrimaryInfo
                                title="Backend"
                                info={backendInfo}
                                icon={<StorageIcon fontSize={width >= IMAC_WIDTH ? "19px" : ""}/>}
                                oldSafari={oldSafari}
                                gitLink={gitLinkBackend}
                            />
                            <PrimaryInfo
                                title="Purpose"
                                info={purpose}
                                icon={<BuildIcon fontSize={width >= IMAC_WIDTH ? "19px" : ""}/>}
                                oldSafari={oldSafari}
                            />
                        </tr>
                    </table>
                    <AboutSection about={about} about2={about2}/>
                    <Techstack techs={technologies}/>
                </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ProjectModal;