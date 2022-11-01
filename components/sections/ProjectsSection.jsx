import React from 'react';
import {
    wrap,
    projectsWrap
} from './ProjectsSection.module.scss';
import AbTestProject from './ProjectsSection/Projects/ab-tests/AbTestProject';
import ProjectsTitle from './ProjectsSection/ProjectsTitle';
import CustomerDataProject from './ProjectsSection/Projects/in-app-purchase/CustomerDataProject';
import NaggiarProject from './ProjectsSection/Projects/naggiar/NaggiarProject';
import CrwnClothingProject from './ProjectsSection/Projects/crwn-clothing/CrwnClothingProject';
import WordPressSites from './ProjectsSection/Projects/wordpress/WordPressSites';
import SpotifySearchApp from './ProjectsSection/Projects/spotify-app/SpotifyAppProject';
import ViewGithub from './ProjectsSection/ViewGithub';
const projects = {
    abtests: {
        title: "A/B Test Collaboration Tool",
        summary: "Full-stack app to create a/b test projects, designs, rank designs, and visualize a/b test performance.",
    },
    customerDataProj: {
        title: "Marketing Data Tool",
        summary: "Full-stack app to wrangle in-app-purchase data, find insights, and present data in dynamic data tables."
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
    }
};
const ProjectsSection = () => {


    return (
        <div className={wrap}>
            <ProjectsTitle/>
            <div className={projectsWrap}>
                <AbTestProject {...projects.abtests}/> 
                <CustomerDataProject {...projects.customerDataProj}/>
                <NaggiarProject {...projects.naggiarProj}/>
                <WordPressSites {...projects.wordPressSites}/>
                <CrwnClothingProject {...projects.crwnClothingProj}/>
                <SpotifySearchApp {...projects.spotifySearchApp}/>
            </div>
            <ViewGithub/>
        </div>
    );
};

export default ProjectsSection;