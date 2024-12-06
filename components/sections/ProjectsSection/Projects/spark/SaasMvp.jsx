import React, { useState } from 'react';
import Card from '@mui/material/Card'
import s from '../ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../public/proj-bg.jpg';
import ProjectModal from '../ProjectModal';
import Image from 'next/image';

const SaasMvp = ({ title, summary, impact="" }) => {
    const [open, setOpen] = useState(false);
    const data = {
        title: "B2B/B2C SaaS Product MVP",
        frontendInfo: 'Next.js (14+) w/ Typescript, styled using TailwindCSS and NextUI, then we pivoted to a mobile-only app.',
        backendInfo: "API and chat functionality in Firebase, core DB hosted on Neon (PostgreSQL DB)",
        purpose: "I designed this MVP for an underserved niche market: US churches. They currently have some processes that are inefficient that me and my partner are solving, specifically related to mentorship.",
        technologies: ['Next.js (14)', 'PostgreSQL', 'Firebase', 'Supabase', 'Typescript'],
        about: `Performed about 20+ different user interviews using active listening to discover problems with the market, both organizationally and individually with church members.`,
        about2: `We used a market-validation process consisting of hypothesis testing and validation through user interviews, landing page tests, and data-driven thinking.`,
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
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: "24px"}}>
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

export default SaasMvp;