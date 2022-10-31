import React from 'react';
import s from './ExperienceSection.module.scss';
import Timeline from '@mui/lab/Timeline';
import ExperienceItem from './ExperienceSection/ExperienceItem';
import ExperienceTitle from './ExperienceSection/ExperienceTitle';




const jobs = [
    {
        company: "Techlab FZE",
        dates: "April 2021 - Present",
        description: "Full-stack developer; managed two projects from start to finish, collaborated across teams, trained developers, managed multiple AWS EC2 instances, and maintained a docker network."
    },
    {
        company: "Eternal-I Software Solutions",
        dates: "July 2020 - June 2021",
        description: "Full-stack developer; worked directly with a steel manufacturing client to build a CAD file quoting application. Also managed Wordpress hosting servers, and setup 3 Wordpress sites."
    },
    {
        company: "Personal Development",
        dates: "January 2020 - Present",
        description: "150+ hours teaching myself full-stack development. I've deployed more than 5 projects, built a spotify search app, and built an e-commerce store, and learned SQL."
    },
    {
        company: "Techspring Partners",
        dates: "June 2018 - July 2018",
        description: "I built a wordpress site for a university organization."
    },
    {
        company: "Internet Marketing Factors, Inc.",
        dates: "January 2017 - March 2017",
        description: "Built a web app with Python/Flask that automated a data entry task, grabbed data from semrush.com's API, and output valuable marketing data."
    }
]




const ExperienceSection = ({}) => {



    return (
        <div className={s.wrap}>
            <ExperienceTitle title="EXPERIENCE" backgroundColor="#1c1c1c"/>
            <Timeline className={s.timeline} position={"right"}>
            {
                jobs.map((job, idx) => <ExperienceItem key={idx} {...job}/>)
            }
            </Timeline>
        </div>
    );
};

export default ExperienceSection;