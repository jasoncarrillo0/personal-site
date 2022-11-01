import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const CrwnClothingProject = ({ title, summary }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "CRWN Clothing",
        frontendInfo: "Frontend is a clothing store with a cart, checkout, login with google, and a normal login.",
        backendInfo: "I used Firebase for the backend to handle user login and data. Firebase did most of the the heavy lifting for me. I then used Heroku to push it online.",
        purpose: "I built this to grow my React and Redux skills.",
        technologies: ['React', 'Redux', 'Firebase', 'Redux-Saga', 'SASS', 'Stripe Checkout'],
        about: `This project is how I learned Redux and the problems it solves. I built this project through a course, customized it to make it my own, and I got hands on experience with Heroku. It was quite challenging as a beginner in React, but this course launched me forward in my career.`,
        siteLink: "http://ecom-crown-clothing.herokuapp.com/",
        gitLinkFrontend: "https://github.com/jasoncarrillo0/crwn-clothing",
        gitLinkBackend: "https://github.com/jasoncarrillo0/crwn-clothing"
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

export default CrwnClothingProject;