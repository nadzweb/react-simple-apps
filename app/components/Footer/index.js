import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';
import Div from './Div';

function Footer() {
  return (
    <footer>
      <div className="small">
        <FormattedMessage {...messages.licenseMessage} />
        <Div><FormattedMessage {...messages.changeLocaleMessage} /> <LocaleToggle /></Div>
      </div>
      <span className="small">
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://github.com/nadzweb" target="_blank">Nadzweb</A>,
          }}
        /></span>
    </footer>
  );
}

export default Footer;
