/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  margin-top: 80px;
`;
export function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Simple apps"
        defaultTitle="Simple Apps"
        meta={[
          { name: 'description', content: 'A collection of simple apps built in React' },
        ]}
      />
      <Header />
      <AppWrapper className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <Navigation />
          {React.Children.toArray(props.children)}
        </div>
        <hr/>
        <Footer />
      </AppWrapper>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
