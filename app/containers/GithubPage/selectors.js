/**
 * Component selectors
 */

import { createSelector } from 'reselect';

const selectGithub = (state) => state.get('github');

const makeSelectUsername = () => createSelector(
  selectGithub,
  (pageState) => pageState.get('username')
);

export {
  selectGithub,
  makeSelectUsername,
};
