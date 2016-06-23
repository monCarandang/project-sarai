import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

//import { TriSection } from '/client/modules/ui-components-v2';
import {SectionList} from '/client/modules/ui-components';

import CropSection from './../components/CropSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {WeatherStations} = Collections;

    const coresections = [];

    const crops = [
    {url: '/images/crops-flat-icons/rice.png', name: 'RICE', ref: '/core-rice'},
    {url: '/images/crops-flat-icons/corn.png', name: 'CORN', ref: '/core-corn'},
    {url: '/images/crops-flat-icons/banana.png', name: 'BANANA', ref: '/core-banana'},
    {url: '/images/crops-flat-icons/coconut.png', name: 'COCONUT', ref: '/core-coconut'},
    {url: '/images/crops-flat-icons/coffee.png', name: 'COFFEE', ref: '/core-coffee'},
    {url: '/images/crops-flat-icons/cacao.png', name: 'CACAO', ref: '/core-cacao'}
  ];
  /*for(var i=0;i<crops.length;i++){
    coresections.push(React.createElement(CropSection, {
        img: crops[i].url,
        title: crops[i].name,
        link: crops[i].ref
    }));
  }*/
  coresections.push(React.createElement(CropSection, {
      img: '/images/crops-flat-icons/rice.png',
      title: 'RICE',
      link: '/'
  }));
  console.log(coresections);
  onData(null, {coresections});
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);