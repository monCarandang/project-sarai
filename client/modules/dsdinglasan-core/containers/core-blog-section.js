import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import BlogList from './../components/BlogList.jsx';
//import TitleSection from './../components/TitleSection.jsx';
import CoreBlogList from './core-blog-list';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const sections = [];
    const path = 'core.blog';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const blog = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(blog){
            sections.push(React.createElement(CoreBlogList));
            onData(null, {
                sections,
                title: blog.title,
                text: blog.text
            });
        }
      }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(BlogList);