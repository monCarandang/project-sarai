import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import {SectionList} from '/client/modules/ui-components';

import CoreBanner from './../containers/core-banner';

import CoreCropSection from './../containers/core-crop-section';

import WeatherSection from './../components/WeatherSection.jsx';

import ProjectTitleSection from './../components/ProjectTitleSection.jsx';

import CoreProjectSection from './../containers/core-project-section';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const sections = [];

    sections.push(React.createElement(CoreBanner));
    sections.push(React.createElement(CoreCropSection));

    sections.push(React.createElement(WeatherSection, {
      title: '30-Day Cumulative Rainfall Monitoring + 10 Day Weather Forecast',
      text: 'Determine when to plant based on the cumulative rainfall and forecasts in your area.',
      mapUrl: '/images/samplepics/sample-map.png',
      rainfallchartUrl: '/images/samplepics/generic-case-6-graph.png'
    }));

    sections.push(React.createElement(ProjectTitleSection, {
      title: 'Our Projects',
      text: 'Project SARAI, which is on anchored on precision agriculture, uses advances on technology to know what, when, and where to plant.',
      subtext: 'Field photos from PVeluz'
    }));

    sections.push(React.createElement(CoreProjectSection));

    onData(null, {sections});
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);