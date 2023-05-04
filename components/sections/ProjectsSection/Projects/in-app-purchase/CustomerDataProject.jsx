import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const CustomerDataProject = ({ title, summary, impact="" }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Marketing Data App",
        frontendInfo: "Frontend included dynamic datatables with asynchronous API fetching. A user could type in values in the table columns, and then the frontend would query the backend API I built.",
        backendInfo: "The backend is a dockerized express server that gathered marketing data and validated thousands of daily in-app-purchases from various android Apps. My teammate and I wrote complex MongoDB queries to extract marketing insights from millions of records saved in my DB.",
        purpose: "The primary purpose of the app is to validate in-app purchases, and to provide app-specific performance metrics.",
        technologies: ['React', 'NodeJS', 'Docker', 'Typescript', 'Express', 'Material-UI', 'Redux', 'Redux-Saga', 'SASS'],
        about: `I owned the development process from start to finish. The main thing I learned after creating this app are the tradeoffs between NoSQL and SQL databases. I chose MongoDB because of its flexibility, my personal knowledge of it, and because requirements were uncertain. 
        I realized after the project was done that it would be good to convert the DB to an SQL DB like PostgreSQL, since SQL has more querying power on well-defined data relationships. The end result met all requirements and was somewhat performant, but was not as performant as it could have been if it was an SQL DB. The fast paced environment I was in did
        not allow for optimization since newer projects took priority.`,
        about2: `Working with so many teams gave me an expanded understanding
        of the mindsets of each team, and how to communicate in easy-to-understand terms. I also gained insight into mobile development world. Typescript once again came in very handy in my development workflow.`,
        gitLinkFrontend: "https://github.com/jasoncarrillo0/purchasesApp",
        gitLinkBackend: "https://github.com/jasoncarrillo0/purchasesApp"
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
                        />                        <div className={s.svgWrap} onClick={() => setOpen(true)}>
                            <CodeIcon className={s.codeIcon}/>
                            <p className={s.msg}>View Project</p>
                        </div>
                    </div>
                )}
                alt="project"
                sx={{position: 'relative'}}
            />

            <CardContent className={s.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <div className={s.impact}>Impact: {impact}</div>
                <Typography variant="body2" color="text.secondary">
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

export default CustomerDataProject;