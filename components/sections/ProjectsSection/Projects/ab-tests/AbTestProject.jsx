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
        title: "A/B Test Collaboration Portal",
        frontendInfo: "The front end includes interactive data grids, a/b tests and designs forms with image uploading, data visualization with the Recharts library. CRUD actions also are available according to the type of user logged in.",
        backendInfo: "I used a dockerized Typescript Express server and MongoDB to store ab test data, and upload assets to an AWS S3 bucket. Includes authenticated routes, using JWT tokens.",
        purpose: "The marketing team needed a platform to easily share and update their a/b tests on iOS and Android applications.",
        technologies: ['React', 'NodeJS', 'Docker', 'Typescript', 'Express', 'Material-UI', 'Redux', 'Redux-Saga', 'SASS'],
        about: `As the only developer on this project, I designed and built everything. It was a genuine pleasure! TypeScript once again proved to be such a valuable asset
        I love building apps from scratch, and the purpose of the app was really going to help other members on my team. I can imagine as a designer, having a tool like the one I built
        would really make my life a lot easier. 
        `,
        gitLinkFrontend: "https://github.com/jasoncarrillo0/abTestApp",
        gitLinkBackend: "https://github.com/jasoncarrillo0/abTestApp",
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