import { CardContent, Paper } from '@mui/material';
import React from 'react';
import DemoBtn from './DemoBtn';
import GitHubBtn from './GitHubBtn';
import YtBtn from './YtBtn';
import s from './PrimaryInfo.module.scss';


const PrimaryInfo = ({ title, info, icon, gitLink, ytBtn, ytLink, oldSafari, demoLink=null }) => {
    let color;
    if (title === "Frontend") {
        color = "#fb4b4b8c";
    } else if (title === "Backend") {
        color="#050560"
    } else if (title === "Purpose") {
        color = "#606060";
    }
    
    let customStyles = {
        backgroundColor: color,
        position: 'relative'
    }

    if (oldSafari) {
        customStyles.margin = '1rem 0';
    }

    const hasBtns = gitLink || demoLink || ytBtn;
    return (
        <Paper className={s.wrap} sx={customStyles} >
            <CardContent>
                <div className={s.titleWrap}>
                    {title}
                    {icon}
                </div>
                <div className={s.infoWrap}>
                    {info}
                </div>

                {
                    hasBtns && (
                        <div className={s.btnWrap}>
                            {
                                gitLink  ?  <GitHubBtn link={gitLink}/> : null
                            }
                            {
                                demoLink && <DemoBtn link={demoLink}/>
                            }
                            {
                                ytBtn && <YtBtn link={ytLink}/>
                            }
                        </div>
                    )
                }
                
                
                
            </CardContent>
        </Paper>
    );
};

export default PrimaryInfo;