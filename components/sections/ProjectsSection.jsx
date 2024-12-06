import React from 'react';
import s from './ProjectsSection.module.scss';
import AbTestProject from './ProjectsSection/Projects/ab-tests/AbTestProject';
import ProjectsTitle from './ProjectsSection/ProjectsTitle';
import CustomerDataProject from './ProjectsSection/Projects/in-app-purchase/CustomerDataProject';
import NaggiarProject from './ProjectsSection/Projects/naggiar/NaggiarProject';
import CrwnClothingProject from './ProjectsSection/Projects/crwn-clothing/CrwnClothingProject';
import WordPressSites from './ProjectsSection/Projects/wordpress/WordPressSites';
import SpotifySearchApp from './ProjectsSection/Projects/spotify-app/SpotifyAppProject';
import ViewGithub from './ProjectsSection/ViewGithub';
import { Element } from 'react-scroll';
import { SCROLL_ELEMENT_NAMES } from '../../utils/constants';
import SocialMediaBackend from './ProjectsSection/Projects/social-media-app/SocialMediaBackend';
import CrudTablesApp from './ProjectsSection/Projects/crud-tables-app/CrudTablesApp';
import ArabicToolsApp from './ProjectsSection/Projects/arabic-tools/ArabicTools';
import RealEstateOverviewProject from './ProjectsSection/Projects/real-estate-overview/RealEstateOverviewApp';
import SaasMvp from './ProjectsSection/Projects/spark/SaasMvp';
const projects = {
    abtests: {
        title: "A/B Test Collaboration Tool",
        impact: "20% boost in ad revenue.",
        summary: "Full-stack web app to create/launch A/B tests, upload designs, rank designs, and visualize A/B test performance.",
    },
    customerDataProj: {
        title: "Marketing Data Tool",
        impact: "Validates 1000s of in-app purchases everyday.",
        summary: "Full-stack web app to validate/wrangle in-app-purchase data, find insights, and present data in dynamic data tables to the CEO and CTO."
    },
    socialMediaProj: {
        title: "Social Media Backend",
        impact: "5000+ users within the first month.",
        summary: "Backend for a social media application using Firebase and cloud functions, GCP's serverless function offering."
    },
    naggiarProj: {
        title: "CAD File Quoting App for a Steel Company",
        impact: "Quoting process reduced from days to seconds.",
        summary: "Full-stack web app to quote CAD files for laser-cuts, also with a custom-built CMS."
    },
    crwnClothingProj: {
        title: "E-Commerce Clothing Storefront",
        summary: "My first React project! Full-stack app with clothing categories, stripe integration, login with google, and a firebase backend."
    },
    wordPressSites: {
        title: "Wordpress Sites for Clients",
        summary: "A site for an actress, a chiropractor, a university organization, and small businesses."
    },
    spotifySearchApp: {
        title: "Spotify Search App",
        summary: "A basic app to login to spotify and search artists and albums, with the infinite scroll effect."
    },
    crudTablesApp: {
        title: "Client Management Portal",
        impact: "Decreased client processing time by 80% for an IT business",
        summary: "Full stack web app for an IT business featuring table creation and editable rows (CRUD), and site-wide full-text search functionality."
    },
    arabicToolsApp: {
        title: "Language Learning Tool (Arabic)",
        summary: <>A web app with an optimized learning structure for arabic grammar, inspired by the {<a href="https://supermemo.com/en/archives1990-2015/articles/20rules" target="_blank" rel="noopener noreferrer">The 20 Rules for Formulating Knowledge.</a>}</>
    },
    realEstateApp: {
        title: "Real Estate Market Overview Generator",
        impact: "Generates market data for nearly every US county/city.",
        summary: "NextJS web app to help me analyze markets to invest in. Integrates with the US Census Bureau API, and Google APIs."
    },
    saasMvp: {
        title: "Mentorship B2B/B2C MVP",
        impact: "Delivered a PostgreSQL data model, shaped product vision, and cut MVP completion time in half.",
        summary: "Worked with a founder to design a product and design backend infrastructure."
    }
};
const ProjectsSection = () => {


    return (
        <Element name={SCROLL_ELEMENT_NAMES.PROJECTS_SECTION}>
            <section className={s.wrap}>
                <ProjectsTitle/>
                <div className={s.projectsWrap}>
                    <SaasMvp {...projects.saasMvp} />
                    <SocialMediaBackend {...projects.socialMediaProj}/>
                    <AbTestProject {...projects.abtests}/> 
                    <CustomerDataProject {...projects.customerDataProj}/>
                    <CrudTablesApp {...projects.crudTablesApp}/>
                    <NaggiarProject {...projects.naggiarProj}/>
                    <RealEstateOverviewProject {...projects.realEstateApp}/>
                    <ArabicToolsApp {...projects.arabicToolsApp}/>
                </div>
                <ViewGithub/>
            </section>
        </Element>
        
    );
};

export default ProjectsSection;