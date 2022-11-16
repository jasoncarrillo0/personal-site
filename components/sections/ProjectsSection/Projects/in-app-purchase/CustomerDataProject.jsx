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
        frontendInfo: "Frontend included datatables with asynchronous API fetching, querying data based off of table column field input, and data pagination.",
        backendInfo: "The backend is a dockerized express server that gathered marketing data and validated thousands of daily in-app-purchases from various android Apps. My teammate and I wrote unnecessarily (see about section) complex MongoDB queries to extract marketing insights from 100,000+ records saved in my DB.",
        purpose: "The primary purpose of the app is to validate in-app purchases, and to provide app-specific performance metrics.",
        technologies: ['React', 'NodeJS', 'Docker', 'Typescript', 'Express', 'Material-UI', 'Redux', 'Redux-Saga', 'SASS'],
        about: `I owned the development process from start to finish. The main thing I learned after creating this app are the tradeoffs between NoSQL and SQL databases. Looking back, the development process was quicker because of 
        my existing knowledge of MongoDB, but I realized after the project was done that the type of data and use case probably demanded an SQL database, since they can work better with complex queries. The end result executed all requirements, but was not as performant as it could have been. The fast paced environment I was in did
        not allow for optimization since newer projects took priority.`,
        about2: `Working with so many teams gave me an expanded understanding
        of the mindsets of each team, and how to better communicate as a web developer. I also gained insight into mobile development world. Typescript once again came in very handy in my development workflow.`,
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