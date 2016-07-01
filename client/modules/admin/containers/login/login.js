import React from 'react';

import Login from './../../components/login/login.jsx';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const deps = (context, actions) => ({
  callback: actions.Login.login,
  context: () => context
})

const composer = ({context}, onData) => {

  onData(null, {sample: 'sample'});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(Login);