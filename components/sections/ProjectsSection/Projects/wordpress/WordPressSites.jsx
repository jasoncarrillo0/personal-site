import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const WordPressSites = ({ title, summary }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Wordpress Sites",
        frontendInfo: "I've setup multiple wordpress sites. I customized some themes and created my own digital assets to improve the UI/UX.",
        backendInfo: "I managed processes from start to finish; e.g., importing and customizing themes, managing DNS settings, cPanel accounts, email accounts, etc.",
        purpose: "The sites were for an actress, a university organization, a chiropractor, and a couple other small businesses.",
        technologies: ['HTML/CSS', 'FTP', 'cPanel', 'JavaScript', 'Wordpress'],
        about: `Working with clients did a couple of things: expanded my ability to communicate to non-technical users and gave me a deeper understanding of a business-client relationships. 
        Given that almost half of all websites are built using Wordpress, it was enlightening to build with Wordpress. Having customer-facing skills as a developer can really improve teamwork abilities, since 
        not everyone on a team is always made of software developers. It was really a wonderful experience interacting with the small business world.`
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

export default WordPressSites;