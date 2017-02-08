/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { Link } from 'react-router';
import H1 from 'components/H1';
import messages from './messages';

export const Ul = styled.ul` font-style: italic`;

export default class HomePage extends React.Component {
  
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="col col-md-12">
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'RSA - Homepage' },
          ]}
        />
        
        <div className="jumbotron">
          <H1>Welcome to React Simple Apps</H1>
          <p className="lead">
            <strong>React Simple Apps (RSA)</strong> is a collection of simple and ready to use apps built using the following technologies.<br/>
            The project uses <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">REACT BOILERPLATE</a> for base development.
              <br/><br/>
            <Ul>
              <li>React</li>
              <li>Redux</li>
              <li>ImmutableJS</li>
              <li>reselect</li>
              <li>react-intl</li>
              <li>routing</li>
              <li>...any many more</li>
            </Ul>
          </p>
          <p><Link className="button btn btn-lg btn-primary" to="/fxcalculator" role="button">View Apps</Link></p>
        </div>
      </div>
    );
  }
}