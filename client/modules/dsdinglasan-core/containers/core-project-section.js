import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProjectList from './../components/ProjectList.jsx';
import ProjectSection from './../components/ProjectSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const sections = [];

    const projects = [
    {url: '/images/Services/real time data copy.jpg', name: 'Real-Time Weather Monitoring', ref: '/core-sample', text: 'View real-time weather data from the weather stations installed throughout the country.'},
    {url: '/images/Services/suitability copy 2.png', name: 'Suitability Maps', ref: '/core-sample', text: 'Maximize your yield by knowing what and where to plant'},
    {url: '/images/Services/vulver2 2.png', name: 'Vulnerability Maps', ref: '/core-sample', text: 'Know the rainfall pattern, temperature and NDVI of your area'},
    {url: '/images/Services/multispectral copy.jpg', name: 'Multispectral Camera Imaging', ref: '/core-sample', text: 'Determine the health of your crops without destroying it for analysis.'},
    {url: '/images/Services/DSC_0533 copy.jpg', name: 'Integrated Crop Management', ref: '/core-sample', text: 'Enhance your adaptibility by using SARAI’s integrated crop support system.'},
    {url: '/images/Services/integrated pest management.JPG', name: 'Integrated Pest Management', ref: '/core-sample', text: 'Identify pests and know how to manage them by dragging pest images on the platform.'},
    {url: '/images/Services/ICM.jpg', name: 'Crop Monitoring and Forecasting', ref: '/core-sample', text: 'Plan your planting practices wisely for optimum yield.'},
    {url: '/images/Services/alerts and advisories.jpg', name: 'Alerts and Advisories', ref: '/core-sample', text: 'Receive crop alerts and advisories to help you increase your yield and your profit.'},
    {url: '/images/Services/sarai-eskwela.jpg', name: 'SARAI Eskwela', ref: '/core-sample', text: 'Learn more about new technologies on smarter farming.'}
    ];

    for(var i=0;i<projects.length;i++){
      sections.push(React.createElement(ProjectSection, {
        title: projects[i].name,
        img: projects[i].url,
        link: projects[i].ref,
        text: projects[i].text
      }));
    }

    onData(null, {sections});
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(ProjectList);