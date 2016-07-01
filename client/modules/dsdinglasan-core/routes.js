import React from 'react';

import {Landing} from '/client/modules/ui-components';
//import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';
import {CoreAppDrawer, CoreFooter} from '/client/modules/core';

import CoreAppBar from './containers/core-app-bar';

import CoreContent from './containers/core-content';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/home', {
    name: 'home.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar, {spacing: false}),
        //appBar: React.createElement(CoreAppBar),
        //appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(CoreContent, {spacing: false}),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};