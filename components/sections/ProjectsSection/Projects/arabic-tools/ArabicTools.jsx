import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const ArabicToolsApp = ({ title, summary }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Language Learning Helper App",
        frontendInfo: "Frontend has normal user and auth users. Auth users can upload/edit vocab tables, and create/edit practice sentences",
        backendInfo: "I used Firebase for the backend to handle user management and vocab data.",
        purpose: "I built this app to optimize my Arabic studies and solve problems created by grammar practice resources.",
        technologies: ['React', 'Redux', 'Firebase', 'SASS'],
        about: `I realized that resources available for grammar practice utilize vocabulary from seemingly random sets that aren't centralized. This greatly increases the "noise" when trying to simply practice grammatical concepts. I solved this
        issue by creating an app that limits sentence (grammar) practice to a limited set of vocabulary, to increase learning efficiency. An auth user can also balance vocab usage for practice sentences by seeing how many times a particular vocab word has 
        been used in other practice sentences; this further enforces the limited set principle thereby reducing the "noise" in absorbing tough grammatical concepts.`,
        about2: "Also, anytime I need to add or remove vocabulary I can. I can also have a friend or Arabic teacher easily add sentences that I can practice.",
        ytLink: "https://youtu.be/VjvJABT3ahg",
        gitLinkFrontend: "https://github.com/jasoncarrillo0/arabic-tools",
        gitLinkBackend: "https://github.com/jasoncarrillo0/arabic-tools"
    }

    return (
        <Card className={s.wrap}>
            <CardMedia
                component={() => (
                    <div className={s.topCardWrap}>
                        <Image
                            src={bgCodeImg}
                            alt="code logo"
                            className={s.codeLogo}
                        />
                        <div className={s.svgWrap} onClick={() => setOpen(true)}>
                            <CodeIcon className={s.codeIcon}/>
                            <p className={s.msg}>View Project</p>
                        </div>
                    </div>
                )}
                alt="project"
                sx={{position: 'relative'}}
            />

            <CardContent className={s.cardContent}>
                <Typography className={s.titleClass} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography className={s.desc} variant="body2" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
            <CardActions className={s.actionsArea}>
                <Button size="small" onClick={() => setOpen(true)}>View Project</Button>
            </CardActions>
            <ProjectModal open={open} setOpen={setOpen} {...data}/>
        </Card>
    );
};

export default ArabicToolsApp;