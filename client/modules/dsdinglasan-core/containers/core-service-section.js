import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import { TriSection, SectionCard, BannerTitleEditor } from '/client/modules/ui-components-v2';

const composeLandingPage = ({context}, onData) => {
    const {Meteor, Collections, FlowRouter} = context();

    const {LandingData} = Collections;

    const paths = [
        'real-time-data.root',
        'suitability.root',
        'vulnerability.root',
        'multispectral-camera-imaging.root',
        'integrated-crop-management.root',
        'pest-management.root',
        'crop-monitoring-and-forecasting.root',
        'alerts-and-advisories.root',
        'sarai-eskwela.root'
      ];
    if (Meteor.subscribe('services', paths).ready()) {
        const services = LandingData.find({path: {$in: paths}}, {sort: {sort: 1}})
          .fetch();

        if (services && services.length > 0) {
            const sections = services.map((service) => {
                return () => (React.createElement(SectionCard, {
                title: service.title,
                img: service.background,
                link: FlowRouter.path(service.path),
                text: service.text
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