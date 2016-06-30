import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import {SectionList} from '/client/modules/ui-components';
import ReportSection from './../components/ReportSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();

    const {LandingData} = Collections;
    const sections = [];
    const spacing = false;
    const path = 'core.report';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const report = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(report){
            sections.push(React.createElement(ReportSection, {
              title: report.title,
              reports: report.reports
            }));
        }

        onData(null, {sections, spacing});
      }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);