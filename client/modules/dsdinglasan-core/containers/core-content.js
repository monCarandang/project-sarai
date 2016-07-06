import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import {SectionList} from '/client/modules/ui-components';

import CoreBanner from './../containers/core-banner';

import CoreCropSection from './../containers/core-crop-section';

//import WeatherSection from './../components/WeatherSection.jsx';

import CoreProjectSection from './../containers/core-project-section';

import CoreReportSection from './../containers/core-report-section';

//import CoreSubscribeSection from './../containers/core-subscribe-section';

import CoreBlogSection from './../containers/core-blog-section';

import CoreQuotesSection from './../containers/core-quotes-section';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const sections = [];
    const spacing = false;

    sections.push(React.createElement(CoreBanner));
    sections.push(React.createElement(CoreCropSection));

    /*sections.push(React.createElement(WeatherSection, {
      title: '30-Day Cumulative Rainfall Monitoring + 10 Day Weather Forecast',
      text: 'Determine when to plant based on the cumulative rainfall and forecasts in your area.',
      mapUrl: '/images/samplepics/sample-map.png',
      rainfallchartUrl: '/images/samplepics/generic-case-6-graph.png'
    }));*/

    sections.push(React.createElement(CoreProjectSection));

    sections.push(React.createElement(CoreReportSection));

    //sections.push(React.createElement(CoreSubscribeSection));

    sections.push(React.createElement(CoreBlogSection));

    sections.push(React.createElement(CoreQuotesSection));

    onData(null, {sections, spacing});
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);