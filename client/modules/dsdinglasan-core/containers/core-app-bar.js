import React from 'react';
// import CoreAppNav from './core-app-nav';
import CoreNav from './core-nav';
import CoreAppTitle from './core-app-title';
import CoreHeaderTitle from './core-header-title';
import CoreHeaderSearch from './core-header-search';
import {AppBar} from '/client/modules/ui-components';
import {composeAll, compose, useDeps} from 'mantra-core';

export const composerApp = (obj, onData) => {
  const {title = CoreAppTitle, nav = CoreNav, module = 'core', position = 'app-bar'} = obj;
  const options = {position, module};
  const appTitle = React.createElement(title, options);
  const appNav = React.createElement(nav, options);
  const appHeaderTitle = React.createElement(CoreHeaderTitle);
  const appHeaderSearch = React.createElement(CoreHeaderSearch);
  onData(null, {appTitle, appNav, appHeaderTitle, appHeaderSearch});
};

export default composeAll(
  compose(composerApp),
  useDeps()
)(AppBar);
