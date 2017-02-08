import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-container" aria-controls="navbar-container" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">ReactSimpleAPPs</Link>

        <div className="collapse navbar-collapse" id="navbar-container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FormattedMessage {...messages.home} />
              </Link>
            </li>
          </ul>
        </div>
    </nav>
    );
  }
}

export default Header;
