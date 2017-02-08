/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <div className="col col-md-9">
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'RSA - Homepage' },
          ]}
        />
        
        <H2>
          <FormattedMessage {...messages.heading} />
        </H2>
      </div>
    );
  }
}