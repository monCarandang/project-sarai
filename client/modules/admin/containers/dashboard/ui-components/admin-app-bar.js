import React from 'react';
import {CoreAppTitle} from '/client/modules/core';
import {AppBar, NavList} from '/client/modules/ui-components';
import {composeAll, compose, useDeps} from 'mantra-core';


export const composerApp = (obj, onData) => {
  const {title = CoreAppTitle, module = 'core', position = 'app-bar'} = obj;
  const options = {position, module};
  const appTitle = React.createElement(title, options);
  // const appNav = React.createElement(nav, options);
  const appNav = React.createElement(NavList, {navs: [], position: 'app-bar'})
  onData(null, {appTitle, appNav});
};

export default composeAll(
  compose(composerApp),
  useDeps()
)(AppBar);
