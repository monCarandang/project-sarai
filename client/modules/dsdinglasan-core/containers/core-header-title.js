import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import {AppTitle} from '/client/modules/ui-components';


const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const path = 'header.root';
    
    if (Meteor.subscribe('landing-page', path).ready()) {
        const headerInfo = LandingData.find({path}, {sort: {sort: 1}}).fetch();

        if (headerInfo && headerInfo.length > 0) {
            
            const title = headerInfo[0].text;
            onData(null, {title});
        }
    }
    
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(AppTitle);