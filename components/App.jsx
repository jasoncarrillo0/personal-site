import dynamic from "next/dynamic";
import s from './App.module.scss';

const DynamicAppBar = dynamic(() => import("./sections/AppBar"), { ssr: false});
const DynamicTopSection = dynamic(() => import('./sections/TopSection'), {ssr: false});
const DynamicProjectsSection = dynamic(() => import('./sections/ProjectsSection'), {ssr: false});
const DynamicExperienceSection = dynamic(() => import('./sections/ExperienceSection'), {ssr: false});
const DynamicSkillsSection = dynamic(() => import('./sections/SkillsSection'), {ssr: false});
const DynamicAboutSection = dynamic(() => import("./sections/AboutSection"), {ssr: false});
const DynamicBottomSection = dynamic(() => import('./sections/BottomSection'), {ssr: false});
const DynamicFooter = dynamic(() => import('./sections/Footer'), { ssr: false});



const App = () => {
    return (
        <div className={s.wrap}>
            <DynamicAppBar/>
            <DynamicTopSection/>
            <DynamicProjectsSection/>
            <DynamicExperienceSection/>
            <DynamicSkillsSection/>
            <DynamicAboutSection/>
            <DynamicBottomSection/>
            <DynamicFooter/>
        </div>
    )
}

export default App;