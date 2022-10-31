import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';

const NaggiarProject = ({ title, summary }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Real World CAD File Quoting App",
        frontendInfo: 'Features: CAD file uploader, custom CMS panel for quoting formulas and site content, "edit" mode for editing and sanitizing site content with wysiwyg editors, cart functionality, etc.',
        backendInfo: "The backend was an Express server deployed on Digital Ocean, along with the frontend. It stored sanitized html, sent dynamic emails, and grabbed data from Autodesk's Model Derivative API.",
        purpose: "This client needed a frontend e-commerce app to allow a user to upload their CAD file, and receive an instant quote for a laser-cut of the CAD file. They also needed to customize the site content and quoting formulas through an admin panel.",
        technologies: ['React', 'NodeJS', 'Express', 'MonogDB', 'Semantic-UI', 'Redux', 'Redux-Saga', 'SASS'],
        about: `As the only developer on this project, everything was up to me to get it built. I navigated changing client requirements, and maintained an "agile" attitude towards the project. It was my first time getting to use emails in Node, so it was fun getting to put together all the e-commerce functionalities.`,
        about2: `I grew as a developer by noticing something about
        noticing something about myself I hadn't noticed: I don't like to leave a task unfinished. I noticed this as a weakness (and a strength), because it would prevent me from juggling multiple areas of the project at once, which I noticed slowed the process down. I then made intentional steps to overcome this weakness.`,
        siteLink: "http://shop.naggiar.net/",
    }

    return (
        <Card className={s.wrap}>
            <CardMedia
                component={() => (
                    <div className={s.topCardWrap}>
                        <img src={bgCodeImg}/>
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

export default NaggiarProject;