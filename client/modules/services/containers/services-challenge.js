import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Paragraph from './../components/Paragraph.jsx';

const composeLandingPage = ({context, _path}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const path = _path;

    if (Meteor.subscribe('landing-page', path).ready()) {
        const obj = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(obj){
            onData(null, {
                title: obj.challengetitle,
                text: obj.challengetext
            });
        }
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(Paragraph);