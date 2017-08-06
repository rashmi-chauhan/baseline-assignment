import React from 'react';
import renderer from 'react-test-renderer';
import { PageLanding } from './';
import { mount } from 'enzyme';

function setup() {
  const props = {
    actions: {
      retrieveProfileFromToken: jest.fn()
    }
  }

  const enzymeWrapper = mount(<PageLanding {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('pages/index.js', () => {
  it('should render', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('#landing-content').exists());
  });
});