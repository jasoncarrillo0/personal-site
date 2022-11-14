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
const projects = {
    abtests: {
        title: "A/B Test Collaboration Tool",
        summary: "Full-stack app to create a/b test projects, designs, rank designs, and visualize a/b test performance.",
    },
    customerDataProj: {
        title: "Marketing Data Tool",
        summary: "Full-stack app to validate/wrangle in-app-purchase data, find insights, and present data in dynamic data tables to the CEO and CTO."
    },
    socialMediaProj: {
        title: "5000+ User Social Media Backend",
        summary: "Backend for a social media application using Firebase and cloud functions, GCP's serverless function offering."
    },
    naggiarProj: {
        title: "CAD File Quoting App for a Steel Company",
        summary: "Full-stack app to quote customer's CAD files for laser-cuts, also with a custom-built CMS."
    },
    crwnClothingProj: {
        title: "E-Commerce Clothing Storefront",
        summary: "Full-stack app with clothing categories, stripe integration, login with google, and a firebase backend."
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
        title: "Dynamic CRUD Tables App for an IT Business",
        summary: "Full stack web app that enables a user to create custom tables for specific properties serviced by the business."
    },
    arabicToolsApp: {
        title: "Language Learning Tool (Arabic)",
        summary: <>A web app with an optimized learning structure for arabic grammar, inspired by the {<a href="https://supermemo.com/en/archives1990-2015/articles/20rules" target="_blank" rel="noopener noreferrer">The 20 Rules for Formulating Knowledge.</a>}</>
    }
};
const ProjectsSection = () => {


    return (
        <Element name={SCROLL_ELEMENT_NAMES.PROJECTS_SECTION}>
            <section className={s.wrap}>
                <ProjectsTitle/>
                <div className={s.projectsWrap}>
                    <SocialMediaBackend {...projects.socialMediaProj}/>
                    <AbTestProject {...projects.abtests}/> 
                    <CustomerDataProject {...projects.customerDataProj}/>
                    <NaggiarProject {...projects.naggiarProj}/>
                    <CrudTablesApp {...projects.crudTablesApp}/>
                    <ArabicToolsApp {...projects.arabicToolsApp}/>
                    {/* <WordPressSites {...projects.wordPressSites}/>
                    <CrwnClothingProject {...projects.crwnClothingProj}/>
                    <SpotifySearchApp {...projects.spotifySearchApp}/> */}
                </div>
                <ViewGithub/>
            </section>
        </Element>
        
    );
};

export default ProjectsSection;