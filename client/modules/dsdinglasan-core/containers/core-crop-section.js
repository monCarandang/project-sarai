import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CropList from './../components/CropList.jsx';
import CropSection from './../components/CropSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const sections = [];

    const crops = [
    {url: '/images/crops-flat-icons/rice.png', name: 'RICE', ref: '/core-rice'},
    {url: '/images/crops-flat-icons/corn.png', name: 'CORN', ref: '/core-corn'},
    {url: '/images/crops-flat-icons/banana.png', name: 'BANANA', ref: '/core-banana'},
    {url: '/images/crops-flat-icons/coconut.png', name: 'COCONUT', ref: '/core-coconut'},
    {url: '/images/crops-flat-icons/coffee.png', name: 'COFFEE', ref: '/core-coffee'},
    {url: '/images/crops-flat-icons/cacao.png', name: 'CACAO', ref: '/core-cacao'}
    ];

    for(var i=0;i<crops.length;i++){
      sections.push(React.createElement(CropSection, {
        title: crops[i].name,
        img: crops[i].url,
        link: crops[i].ref
      }));
    }

    onData(null, {sections});
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(CropList);