import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Form } from './Form';

describe('<Form />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Form />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should create a new task', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<Form handleChange={handleChange} />);

    const input = wrapper.find('[data-testid="input-title"]');
    input.simulate('change', {
      currentTarget: {
        name: 'title',
        value: 'This is a test task',
      }
    });

    expect(handleChange).toHaveBeenCalled();
  });
})
