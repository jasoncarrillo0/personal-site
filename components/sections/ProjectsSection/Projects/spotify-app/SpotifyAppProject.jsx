import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';

const SpotifySearchApp = ({ title, summary }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Spotify Search App",
        frontendInfo: "Frontend features login with Spotify, searching for artists, viewing their albums, each with the infinite-scroll effect.",
        backendInfo: "No backend for the project, except for being pushed to Heroku.",
        purpose: "Originally it was for a job interview. I then decided clean up and convert the project from JavaScript to TypeScript to grow my Typescript skills.",
        technologies: ['React', 'Typescript', 'React Context API', 'SASS'],
        about: `At the time I first built the project, I barely knew react. It was quite a challenge. The infinite scroll effect was optional, but I wanted to challenge myself. I delivered an imperfect result, so I wanted to finish it. Why not learn Typescript while I'm at it?
         I was a little intimidated by TypeScript at first, but then I realized how useful it can be.
        `,
        ytLink: "https://www.youtube.com/watch?v=7Fbt4VTpbco",
        gitLinkFrontend: "https://github.com/jasoncarrillo0/spotify-app-ts"
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

export default SpotifySearchApp;