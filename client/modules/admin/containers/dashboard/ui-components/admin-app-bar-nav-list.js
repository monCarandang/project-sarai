import { NavList } from '/client/modules/ui-components';
import {composeAll, useDeps, composeWithTracker} from 'mantra-core';

const composer = ({context, position}, onData) => {

  onData(null, {navs: [], position});

};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(NavList);
