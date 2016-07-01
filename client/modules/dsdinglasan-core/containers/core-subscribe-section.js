import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
//import {SectionList} from '/client/modules/ui-components';
import SubscribeSection from './../components/SubscribeSection.jsx';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();

    const {LandingData} = Collections;
    const spacing=false;
    const path = 'core.subscribe';

    if (Meteor.subscribe('landing-page', path).ready()) {
        const subscription = LandingData.find({path}, {limit: 1, sort: {sort: 1}}).fetch()[0];
        
        if(subscription){
          onData(null, {
              background: subscription.background,
              icon: subscription.icon,
              title: subscription.title,
              text: subscription.text,
              samplename: subscription.samplename,
              sampleemail: subscription.sampleemail,
              samplenumber: subscription.samplenumber,
              buttonText: subscription.buttonText,
              buttonColor: subscription.buttonColor
            });
      }
    }
}

export default composeAll(
    composeWithTracker(composeLandingPage),
    useDeps()
)(SubscribeSection);