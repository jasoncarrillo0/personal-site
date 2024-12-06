import React from 'react';
import s from './SkillsSection.module.scss';
import html from '../../public/skills/html-logo.png';
import css from '../../public/skills/css-logo.png';
import docker from '../../public/skills/docker-logo.png';
import js from '../../public/skills/js-logo.png';
import mongodb from '../../public/skills/mongodb-icon.png';
import nodejs from '../../public/skills/nodejs-logo.png';
import aws from '../../public/skills/aws-logo.png';
import react from '../../public/skills/react-logo.png';
import redux from '../../public/skills/redux-logo.png';
import responsive from '../../public/skills/responsive-design.png';
import sass from '../../public/skills/sass-logo.png';
import wordpress from '../../public/skills/wordpress-logo.png';
import typescript from '../../public/skills/typescript-logo.png';
import mui from '../../public/skills/mui-logo.png';
import semantic from '../../public/skills/semantic-ui-logo.png';
import redis from '../../public/skills/redis_logo.svg';
import gcp from '../../public/skills/gcp_logo.png';
import sql from '../../public/skills/sql-logo.png';
import Skill from './SkillsSection/Skill';
import postgreSQL from '../../public/skills/Postgresql_logo.png';
import firebase from '../../public/skills/firebase_logo.png';
import ExperienceTitle from './ExperienceSection/ExperienceTitle';
import git from '../../public/skills/git_logo.png';
import tailwind from '../../public/skills/tailwind_logo.svg';
import nextjs from '../../public/skills/nextjs_logo.png';
import python from '../../public/skills/python_logo.png';





import { Element } from 'react-scroll'
import { SCROLL_ELEMENT_NAMES } from '../../utils/constants';


const skills = [
    { "TypeScript": typescript},
    { "NodeJS": nodejs },
    { "React": react },
    { "PostgreSQL": postgreSQL},
    { "MongoDB": mongodb },
    { "Firebase": firebase},
    { "Google Cloud Platform": gcp },
    { "Amazon Web Services": aws },
    { "Docker": docker },
    { "Redis": redis },
    { "NEXTJS": nextjs},
    { "TailwindCSS": tailwind},
    { "SASS": sass },
    { "Material-UI": mui},
    { "Git": git},
    { "Python": python}
];






const SkillsSection = () => {

    return (

        <Element name={SCROLL_ELEMENT_NAMES.SKILLS_SECTION}>
            <section className={s.wrap}>
                <ExperienceTitle title="SKILLS" backgroundColor="#161616"/>
                <div className={s.skillsWrap}>
                {
                    skills.map((skill, i) => {
                        const key = Object.keys(skill)[0];
                        return <Skill key={i} imageSrc={skill[key]} name={key}/>
                    })
                }
                </div>
            </section>
        </Element>
    );
};

export default SkillsSection;