import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import { TriSection, BannerTitleEditor } from '/client/modules/ui-components-v2';

import BlogCard from './../components/BlogCard.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();

    const {LandingData} = Collections;
    const sections = [];
    const path = 'core.blog';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const blog = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(blog){
            const bloglist = blog.blogs;
            const list = bloglist.slice(0,3);
            const sections = list.map((each) => {
                return () => (React.createElement(BlogCard, {
                title: each.title,
                img: each.img,
                link: each.href,
                text: each.text,
                date: each.date,
                datehref: each.datehref
              }));
            });
            onData(null, {sections});
        }
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(TriSection);