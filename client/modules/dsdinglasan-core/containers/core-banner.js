import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Banner from './../components/Banner.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const sections = [];
    const path = 'home.root';
    
    if (Meteor.subscribe('landing-page', path).ready()) {
        const landingData = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(landingData){
             const {title, background, text} = landingData;
            onData(null, {
                title,
                background,
                text
            });
             
        }
      }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(Banner);