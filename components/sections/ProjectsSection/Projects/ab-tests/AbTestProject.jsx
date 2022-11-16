import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const AbTestProject = ({ title, summary, impact="" }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "A/B Test Collaboration Portal",
        frontendInfo: "The front end includes interactive data grids, a/b tests and designs forms with image uploading, data visualization components.",
        backendInfo: "I used a dockerized Typescript Express server and MongoDB to store/collect ab test performance, upload assets to an AWS S3 bucket, and integrate with the Unity API for A/B test deployment.",
        purpose: "The marketing team needed a centralized platform to quickly share and update their a/b tests on iOS and Android applications.",
        technologies: ['React', 'NodeJS', 'Docker', 'Typescript', 'Express', 'Material-UI', 'Redux', 'Redux-Saga', 'SASS'],
        about: `As the only developer on this project, I designed and built everything. It was a genuine pleasure! TypeScript once again provided a wonderful dev experience.
        I was really happy that this app tripled productivity and resulted in a 20% increase in ad revenue, and even cut developer costs by 4%. I love those metrics! 
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

export default AbTestProject;