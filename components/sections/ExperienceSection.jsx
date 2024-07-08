import React from 'react';
import s from './ExperienceSection.module.scss';
import Timeline from '@mui/lab/Timeline';
import ExperienceItem from './ExperienceSection/ExperienceItem';
import ExperienceTitle from './ExperienceSection/ExperienceTitle';
import { Element } from 'react-scroll';
import { SCROLL_ELEMENT_NAMES } from '../../utils/constants';



const jobs = [
    {
        company: "Freelance/Founding Engineer",
        dates: "Jan 2024 - Present",
        description: "Currently verifying my own custom B2B/B2C SaaS solution by conducting user interviews (20+) and identifying their core problems using active listening and a market-validation process - MVP in progress. Also built a full-stack client-management solution for an IT business."
    },
    {
        company: "Supono Holdings LTD",
        dates: "April 2021 - October 2022",
        description: "Full-stack developer; owned, built, and deployed 3 projects from start to finish to AWS and GCP. Added 5000+ users to an app, tripled A/B test frequency, increased ad revenue by 20%, and cut developer costs by 5%."
    },
    {
        company: "Eternal-I Software Solutions",
        dates: "July 2020 - June 2021",
        description: "Full-stack developer; worked directly with a steel manufacturing client to build a CAD file quoting application and reduced their quoting process from days to seconds. I also deployed 3 production level sites for small businesses."
    },
    {
        company: "Personal Development",
        dates: "Jan. 2020 - Present",
        description: "300+ hours teaching myself full-stack development, increasing data structures and algorithms skills through coding interview questions, and learning systems design from ex-Google employees."
    },
    {
        company: "Techspring Partners",
        dates: "June 2018 - July 2018",
        description: "I built a wordpress site for a university organization."
    },
    {
        company: "Internet Marketing Factors, Inc.",
        dates: "Jan. 2017 - March 2017",
        description: "Built a web app with Python/Flask that eliminated a 20 hour data entry task by grabbing data from an external API, performing calculations, and inserting it into an excel sheet."
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