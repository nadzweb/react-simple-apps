import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import messages from '../messages';
import GithubPage from '../index';

describe('<GithubPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <GithubPage />
    );
    expect(renderedComponent.contains(
      <H2>
        <FormattedMessage {...messages.header} />
      </H2>
    )).toBe(true);
  });
});
