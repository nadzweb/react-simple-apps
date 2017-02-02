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

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <div className="col-12 col-md-9">
        <article>
          <Helmet
            title="Home Page"
            meta={[
              { name: 'description', content: 'A React.js Boilerplate application homepage' },
            ]}
          />
          <div>
            
            <Section>
              <H2>
                <FormattedMessage {...messages.trymeHeader} />
              </H2>
              <Form onSubmit={this.props.onSubmitForm}>
                <label htmlFor="username">
                  <FormattedMessage {...messages.trymeMessage} />
                  <AtPrefix>
                    <FormattedMessage {...messages.trymeAtPrefix} />
                  </AtPrefix>
                  <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={this.props.username}
                    onChange={this.props.onChangeUsername}
                  />
                </label>
              </Form>
              <ReposList {...reposListProps} />
            </Section>
          </div>
        </article>
      </div>
    );
  }
}