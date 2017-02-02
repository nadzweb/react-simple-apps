import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../index';

describe('<Navigation />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <Navigation />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
