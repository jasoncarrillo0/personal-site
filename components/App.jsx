import AppBar from "./sections/AppBar"
import TopSection from './sections/TopSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from "./sections/AboutSection";
import BottomSection from './sections/BottomSection';
import Footer from './sections/Footer';
import dynamic from "next/dynamic";



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
        <div>
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