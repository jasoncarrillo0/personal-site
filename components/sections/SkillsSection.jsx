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
import sql from '../../public/skills/sql-logo.png';
import Skill from './SkillsSection/Skill';
import ExperienceTitle from './ExperienceSection/ExperienceTitle';
import { Element } from 'react-scroll'
import { SCROLL_ELEMENT_NAMES } from '../../utils/constants';
const skills = [
    { "React": react },
    { "Redux": redux },
    { "NodeJS": nodejs },
    { "MongoDB": mongodb },
    { "TypeScript": typescript},
    { "JavaScript": js },
    { "HTML5": html},
    { "CSS3": css },
    { "SASS": sass },
    { "Responsive Design": responsive },
    { "Material-UI": mui},
    { "Semantic-UI": semantic },
    { "Amazon Web Services": aws },
    { "Docker": docker },
    { "SQL": sql},
    { "Wordpress": wordpress }
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