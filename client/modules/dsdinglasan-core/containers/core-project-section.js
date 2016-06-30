import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import {SectionList} from '/client/modules/ui-components';
import ProjectTitleSection from './../components/ProjectTitleSection.jsx';
import CoreServiceSection from './core-service-section';
import Button from './../components/Button.jsx';


const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();

    const {LandingData} = Collections;
    const sections = [];

    const path = 'core.project';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const project = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(project){
            sections.push(React.createElement(ProjectTitleSection, {
                title: project.title,
                text: project.text,
                subtext: project.subtext
            }));
            sections.push(React.createElement(CoreServiceSection));
            sections.push(React.createElement(Button, {
              text: project.buttonText,
              link: project.buttonLink,
              buttoncolor: project.buttonColor
            }));
        }

        onData(null, {sections});
      }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SectionList);