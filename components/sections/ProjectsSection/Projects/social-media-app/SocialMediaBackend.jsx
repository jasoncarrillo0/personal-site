import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const SocialMediaBackend = ({ title, summary, impact="" }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Backend for a Social Media App",
        frontendInfo: 'For the dev process I created a utility helper to test push notifications and login workflows.',
        backendInfo: "The backend was deployed on Firebase, and all logic is handled with Cloud Functions. It includes features such as automatic push notifications, image uploading, and user authentication.",
        purpose: "The core of this phone app is the backend. We needed something that integrated well with Firebase but could also provide generous free usage tiers and automatic scaling. Firebase was perfect.",
        technologies: ['Express', 'Typescript', 'Firebase'],
        about: `Getting familiar with Google Cloud Platform was truly an enjoyable experience. I really like GCP and the UI setup. Much better than AWS in my opinion. Diving deep into serverless architecture was an amazing learning experience.`,
        about2: `Firebase functions was a great way to get the MVP shipped fast. While not a long term solution, we needed a proof of concept before investing time and money in optimal solutions. I built the backend resulting in 5000+ users in the first month.
        After the backend was up and running, I left the company. So I didn't have the chance to optimize the project. Firestore is a NoSQL database with fairly limited functionality compared to other NoSQL databases. Perhaps a better optimization is using an SQL 
        database or even a graph-based database, such as Neo4j; these would better serve a large scale social media platform.`,
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

export default SocialMediaBackend;