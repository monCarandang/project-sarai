import React from 'react';

import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';
//import TutorialRoot from './components/TutorialRoot.jsx';
import CoreContent from './containers/core-content';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/dsdinglasan', {
    name: 'dsdinglasan.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(CoreContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};