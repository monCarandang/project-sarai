import React from 'react';

import {AppDrawer} from '/client/modules/ui-components';
import {composeAll, compose, useDeps} from 'mantra-core';
import {CoreAppTitle} from '/client/modules/core';

import AdminNav from './admin-nav';

const composerApp = (obj, onData) => {
  const {title = CoreAppTitle, nav = AdminNav, module = 'admin', position = 'app-bar'} = obj;
  const options = {position, module};
  const appTitle = React.createElement(title, options);
  const appNav = React.createElement(nav, options);
  onData(null, {appTitle, appNav});
};

export default composeAll(
  compose(composerApp),
  useDeps()
)(AppDrawer)