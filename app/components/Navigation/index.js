import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import NavLink from './NavLink';
import messages from './messages';
export const Download = styled.a`
  background: #4CAF50;
  color: #fff;
  margin-top: 10px;
  &:visited, &:link {
    background: #4CAF50;
  }
  &:hover {
    color: #fff;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
        <div className="list-group">
           <NavLink to="/fxcalculator" className="list-group-item" activeClassName="active">
            <FormattedMessage {...messages.fxcalculator} />
          </NavLink>
          <NavLink to="/github" className="list-group-item" activeClassName="active">
            <FormattedMessage {...messages.github} />
          </NavLink>
          <NavLink to="/dashboard" className="list-group-item" activeClassName="active">
            <FormattedMessage {...messages.dashboard} />
          </NavLink>
          <NavLink to="/meetingcostcalculator" className="list-group-item" activeClassName="active">
            <FormattedMessage {...messages.meetingcostcalculator} />
          </NavLink>
          <NavLink to="/taskboard" className="list-group-item" activeClassName="active">
            <FormattedMessage {...messages.taskboard} />
          </NavLink>
          <Download href="https://github.com/nadzweb/react-simple-apps" className="list-group-item" target="_blank">
            <FormattedMessage {...messages.download} />
          </Download>
          
        </div>
      </div>
    );
  }
}

export default Navigation;