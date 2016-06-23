import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Banner from './../components/Banner.jsx';
import {SectionList} from '/client/modules/ui-components';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const sections = [];
    
    const banners = [
      {
        url: '/images/homepage-slider/Project SARAI.png',
        text: 'Smarter Farmers, Smarter Agriculture'
      }
    ];

    sections.push(React.createElement(Banner, {
        img: banners[0].url,
        text: banners[0].text
    }));

    onData(null, {sections});
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);