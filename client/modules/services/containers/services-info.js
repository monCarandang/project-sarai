import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import LeftSection from './../components/LeftSection.jsx';

const composeLandingPage = ({context, _path}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const path = _path;

    if (Meteor.subscribe('landing-page', path).ready()) {
        const obj = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];

        if(obj){
            onData(null, {
                text: obj.text,
                info: obj.info,
                list: obj.info.text
            });
        }
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(LeftSection);