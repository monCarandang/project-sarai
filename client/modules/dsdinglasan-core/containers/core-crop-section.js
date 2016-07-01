import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CropList from './../components/CropList.jsx';
import CropSection from './../components/CropSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const sections = [];

    const path = 'core.crop';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const list = LandingData.find({path}, {sort: {sort: 1}}).fetch();
        if (list.length >= 1) {
          const crops = LandingData.find({path}, {sort: {sort: 1}}).fetch()[0].crops;

          for(var i=0;i<crops.length;i++){
            sections.push(React.createElement(CropSection, {
                title: crops[i].label,
                img: crops[i].img,
                link: crops[i].href
            }));
          }
          onData(null, {sections});

        } else {
          onData(null, {sections: []});
        }
    } else {
        onData(null, {sections: []});
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(CropList);