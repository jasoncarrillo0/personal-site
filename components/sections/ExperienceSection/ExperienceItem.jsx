import React, {useEffect, useState} from 'react';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import s from './ExperienceItem.module.scss';


const ExperienceItem = ({ dates, company, description }) => {
    let h2Style = { lineHeight: '32px'}
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
      
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    });
    return (
        <TimelineItem className={s.wrap}>
            <TimelineOppositeContent className={s.dateWrap} sx={{fontStyle: 'italic'}} color="text.secondary">
                {dates}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot style={{background: '#397fff'}} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.primary" className={s.contentWrap}>
                <h2 style={company === "Techlab FZE"  && width  <= 320 ? h2Style : {}}>{company}</h2>
                <p>{description}</p>
                <hr/>
            </TimelineContent>
        </TimelineItem>
    );
};

export default ExperienceItem;