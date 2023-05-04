import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const RealEstateOverviewProject = ({ title, summary, impact="" }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "Real Estate Market Overview App",
        frontendInfo: "NextJS frontend with the MUI framework and animated charts.",
        backendInfo: "Netlify serverless functions all query data from the US Census Bureau API, and the Google Sheets API. It also caches static queries using a redis cloud instance, particularly using the Upstash-Redis platform.",
        purpose: "As a future real estate investor, I will need something that can generate quick market metrics so I can make a data-driven decision on which market to invest in. I wanted to learn NextJS and Netlify while I was at it.",
        technologies: ['NextJS/React', 'Netlify', 'Typescript', 'MUI', 'SASS', 'Upstash Redis'],
        about: `It was really cool getting to understand the ins and outs of NextJS. I learned how it is particularly geared towards SEO optimization and creating a great user experience. Building lazy loading images and even lazy loading components breathed life on the whole concept of "lazy loading" - a concept I only ever heard of. NextJS is now a great tool in my toolbelt.`,
        about2: `Integrating with the government APIs was challenging (think HTML-only tables for documentation). I had to troubleshoot this problem by joining a slack community centered on the US Census API. To increase performance, I put into practice a concept I learned through a systems design course I took: optimize static queries using a cache. Generally speaking, in-memory caches read data 4X faster than DBs. I came across "Upstash-Redis", which is essentially Redis in the cloud, accessible through HTTP protocol, instead of TCP. Super useful tool.`,
        siteLink: "http://realestate-market-overview.netlify.app/",
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
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: "22px"}}>
                    {title}
                </Typography>
                <div className={s.impact} style={{fontSize: "15px"}}>Impact: {impact}</div>
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

export default RealEstateOverviewProject;