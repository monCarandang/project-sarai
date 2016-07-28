import React from 'react';
import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import lib from './lib';

import AdminDrawer from './containers/dashboard/ui-components/admin-drawer'
import AdminAppBar from './containers/dashboard/ui-components/admin-app-bar'

import Login from './containers/login/login';
import AdminRoot from './components/dashboard/admin-root.jsx';
import AdminHomepage from './containers/dashboard/admin-homepage'

export default (injectDeps, context) => {
  const {FlowRouter, mount, Meteor} = context;
  const LandingCtx = injectDeps(Landing);
  const {triggerAuthenticate} = lib;

  // FlowRouter.triggers.enter([authenticate])

  FlowRouter.route('/login', {
    name: 'login',
    // triggersEnter: [triggerAuthenticate],
    action() {
      mount(LandingCtx, {
        // appBar: React.createElement(CoreAppBar),
        // appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer'}),
        content: React.createElement(Login),
        // footer: React.createElement(CoreFooter)
      });
    }
  })

  FlowRouter.route('/admin', {
    name: 'admin.root',
    triggersEnter: [triggerAuthenticate],
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(AdminAppBar),
        appDrawer: React.createElement(AdminDrawer),
        content: React.createElement(AdminRoot),
        // footer: React.createElement(CoreFooter),
        classList: ['dashboard']
      });
    }
  })

  FlowRouter.route('/admin/homepage', {
    name: 'admin.homepage',
    triggersEnter: [triggerAuthenticate],
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(AdminAppBar),
        appDrawer: React.createElement(AdminDrawer),
        content: React.createElement(AdminHomepage),
        // footer: React.createElement(CoreFooter),
      });
    }
  })


}
