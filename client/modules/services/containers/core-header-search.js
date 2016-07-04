import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import AppSearch from './../components/app-search.jsx';
import HeaderSearch from './../components/HeaderSearch.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();
    const {LandingData} = Collections;
    const path = 'search.header';
    
    if (Meteor.subscribe('landing-page', path).ready()) {
        const headerSearch = LandingData.find({path}, {sort: {sort: 1}}).fetch();
        if (headerSearch && headerSearch.length > 0) {
            const search = React.createElement(HeaderSearch, {
                search: headerSearch[0].text
            });
            onData(null, {search});
        }
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(AppSearch);