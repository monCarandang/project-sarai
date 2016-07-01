import React from 'react';

import AdminHomepage from './../../components/dashboard/admin-homepage.jsx';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const deps = (context, actions) => ({
  context: () => context
})

const composer = ({context}, onData) => {

  onData(null, {sample: 'sample'});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(AdminHomepage);