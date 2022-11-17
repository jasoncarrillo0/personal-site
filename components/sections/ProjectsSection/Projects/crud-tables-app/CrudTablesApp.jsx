import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const CrudTablesApp = ({ title, summary, impact="" }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Dynamic Table Generator App",
        frontendInfo: "Frontend includes features such as datatables, a custom table generator component, a UI for creating any type of editable table you want, and a search bar that performs a full-text search and tells you where to find the relevant table.",
        backendInfo: "The backend is a NodeJS/Express app deployed on a linux server, and uses MongoDB with full-text search functionality and api routes for table creation and table data.",
        purpose: "My friend needed a custom built app for his IT business. The core of the app is the ability to create dynamic tables with CRUD functionality for particular properties he services.",
        technologies: ['React', 'Redux', 'TypeScript', 'NodeJS', 'MongoDB', 'SASS', 'MUI'],
        about: `This project further expanded my knowledge of the tech I used, particularly how easy it is to implement a full-text search in MongoDB. What was even more satsifying than building this project, were the text messages I received from my friend. Things like "This saves me so much time", and, "The other day I needed to pull up client information in the middle of traffic, and it took seconds. This is next-level!" drove the point home: custom software is powerful.`,
        about2: "It's easy to get caught up in your head when working on complex problems, and the development process. It's always a good reminder to keep in mind how much impact the seemingly mundane aspects of coding will have on someone's wellbeing.",
        ytLink: "https://youtu.be/0o2jBRSFIoM"
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
                <div className={s.impact}>Impact: {impact}</div>
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

export default CrudTablesApp;