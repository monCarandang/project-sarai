import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import {SectionList} from '/client/modules/ui-components';
import QuotesSection from './../components/QuotesSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();

    const {LandingData} = Collections;
    const sections = [];
    const spacing = false;
    const path = 'core.quotes';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const quotesData = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(quotesData){
            sections.push(React.createElement(QuotesSection, {
              title: quotesData.title,
              text: quotesData.text,
              author: quotesData.author,
              img: quotesData.img,
              quotes: quotesData.quotes
            }));
        }

        onData(null, {sections, spacing});
      }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);