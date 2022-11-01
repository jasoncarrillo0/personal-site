import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const AbTestProject = ({ title, summary }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Marketing Data App",
        frontendInfo: "Frontend included datatables with asynchronous API fetching, querying data based off of table column field input, and data pagination.",
        backendInfo: "The backend was a dockerized express server that gathered marketing data and validated in-app-purchases from various android Apps. My teammate and I wrote complex MongoDB queries to extract marketing insights from 100,000+ records saved in my DB.",
        purpose: "The primary purpose of the app was to validate in-app-purchases and capture basic purchase information. From that data we could extract and display marketing insights into the performance of specific applications.",
        technologies: ['React', 'NodeJS', 'Docker', 'Typescript', 'Express', 'Material-UI', 'Redux', 'Redux-Saga', 'SASS'],
        about: `This application had an important team element to it. Even though I owned the 
        development process, I got to work with the marketing team, the app development team, 
        and another developer to solve problems and execute the requirements. 
        `,
        about2: `Working with so many teams gave me an expanded understanding
        of the mindsets of each team, and how to better communicate as a web developer. I also gained insight into mobile development world. Typescript once again came in very handy
        for the frontend.`,
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

export default AbTestProject;