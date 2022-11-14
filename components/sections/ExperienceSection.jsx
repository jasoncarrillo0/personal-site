import React from 'react';
import s from './ExperienceSection.module.scss';
import Timeline from '@mui/lab/Timeline';
import ExperienceItem from './ExperienceSection/ExperienceItem';
import ExperienceTitle from './ExperienceSection/ExperienceTitle';
import { Element } from 'react-scroll';
import { SCROLL_ELEMENT_NAMES } from '../../utils/constants';



const jobs = [
    {
        company: "Techlab FZE",
        dates: "April 2021 - October 2022",
        description: "Full-stack developer; managed 3 projects from start to finish. Tripled A/B test frequency, increased ad revenue by 20%, and cut developer costs by 4% by building Typescript apps."
    },
    {
        company: "Eternal-I Software Solutions",
        dates: "July 2020 - June 2021",
        description: "Full-stack developer; worked directly with a steel manufacturing client to build a CAD file quoting application and reduced their quoting process from days to seconds. I also deployed 3 production level sites for small businesses."
    },
    {
        company: "Personal Development",
        dates: "Jan. 2020 - Present",
        description: "150+ hours teaching myself full-stack development."
    },
    {
        company: "Techspring Partners",
        dates: "June 2018 - July 2018",
        description: "I built a wordpress site for a university organization."
    },
    {
        company: "Internet Marketing Factors, Inc.",
        dates: "Jan. 2017 - March 2017",
        description: "Built a web app with Python/Flask that eliminated a 20 hour data entry task by grabbing data from semrush.com's API, performing calculations, and inserting it into an excel sheet."
    }
]




const ExperienceSection = ({}) => {



    return (
        <Element name={SCROLL_ELEMENT_NAMES.EXPERIENCE_SECTION}>
            <section className={s.wrap}>
                <ExperienceTitle title="EXPERIENCE" backgroundColor="#1c1c1c"/>
                <Timeline className={s.timeline} position={"right"}>
                {
                    jobs.map((job, idx) => <ExperienceItem key={idx} {...job}/>)
                }
                </Timeline>
            </section>
        </Element>
        
    );
};

export default ExperienceSection;