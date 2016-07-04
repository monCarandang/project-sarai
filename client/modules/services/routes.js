import React from 'react';

import CoreAppBar from './containers/core-app-bar';

import {ServicesPage}  from '/client/modules/ui-components';


import ServicesTitle from './containers/services-title';
import ServicesInfo from './containers/services-info';
import ServicesMedia from './containers/services-media';
import ServicesChallenge from './containers/services-challenge';
import ServicesSolution from './containers/services-solution';
import ServicesPreFooter from './containers/services-pre-footer';

import {CoreFooter} from '/client/modules/core';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(ServicesPage);

  FlowRouter.route('/real-time-data', {
    name: 'real-time-data.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/suitability', {
    name: 'suitability.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/vulnerability', {
    name: 'vulnerability.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/multispectral-camera-imaging', {
    name: 'multispectral-camera-imaging.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/integrated-crop-management', {
    name: 'integrated-crop-management.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/pest-management', {
    name: 'pest-management.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/crop-monitoring-and-forecasting', {
    name: 'crop-monitoring-and-forecasting.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/alerts-and-advisories', {
    name: 'alerts-and-advisories.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/sarai-eskwela', {
    name: 'sarai-eskwela.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        title: React.createElement(ServicesTitle, {_path: this.name}),
        info: React.createElement(ServicesInfo, {_path: this.name}),
        media: React.createElement(ServicesMedia, {_path: this.name}),
        paragraph1: React.createElement(ServicesChallenge, {_path: this.name}),
        paragraph2: React.createElement(ServicesSolution, {_path: this.name}),
        pre_footer: React.createElement(ServicesPreFooter, {_path: this.name}),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};