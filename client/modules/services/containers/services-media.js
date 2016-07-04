import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MediaSection from './../components/MediaSection.jsx';

const composeLandingPage = ({context, _path}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const path = _path;

    if (Meteor.subscribe('landing-page', path).ready()) {
        const obj = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(obj){
            onData(null, {
                video: obj.video,
                img: obj.img,
                isvideo: obj.isvideo,
                mediasubtext: obj.mediasubtext,
                mediasubtextlink: obj.mediasubtextlink
            });
        }
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(MediaSection);