import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import NavLink from './NavLink';
import messages from './messages';

class Navigation extends React.Component {
  render() {
    return (
      <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
        <div className="list-group">
           <NavLink to="/fxcalculator" className="list-group-item">
            <FormattedMessage {...messages.fxcalculator} />
          </NavLink>
          <NavLink to="/meetingcostcalculator" className="list-group-item">
            <FormattedMessage {...messages.meetingcostcalculator} />
          </NavLink>
          <NavLink to="/userprofile" className="list-group-item">
            <FormattedMessage {...messages.userprofile} />
          </NavLink>
          <NavLink to="/dashboard" className="list-group-item">
            <FormattedMessage {...messages.dashboard} />
          </NavLink>
          <NavLink to="/github" className="list-group-item">
            <FormattedMessage {...messages.github} />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;