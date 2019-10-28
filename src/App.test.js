import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TaskItem } from './components/TasksItem';

describe('<App />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should edit a existing task', () => {
    const wrapper = mount(<App />);
    const item = wrapper.find('li').first();
    const itemContent = item.prop('children')[0]; // una tarea
    item.find('[data-testid="edit-button"]').simulate('click');

    const input = wrapper.find('[data-testid="input-title"]');

    expect(input.prop('value')).toBe(itemContent);

    const newValue = 'tarea editada';
    input.simulate('change', {
      target: {
        name: 'title',
        value: newValue,
      }
    });

    const form = wrapper.find('form');
    form.simulate('submit');

    const newItem = wrapper.find('li').first();
    expect(newItem.prop('children')[0]).toBe(newValue);
  });

  it('should create a new task', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('[data-testid="input-title"]');
    const newValue = 'tarea editada';
    const intialTasksLength = wrapper.state().tasks.length;

    input.simulate('change', {
      target: {
        name: 'title',
        value: newValue,
      }
    });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(wrapper.state().tasks).toHaveLength(intialTasksLength + 1);
    expect(wrapper.state().tasks[intialTasksLength].title).toBe(newValue);

    wrapper.update();

    expect(wrapper.find(TaskItem)).toHaveLength(intialTasksLength + 1);
  });

  it('should change task status', () => {
    const wrapper = mount(<App />);
    const button = wrapper.find('[data-testid="toggle-button"]').first();

    button.simulate('click');

    const item = wrapper.find('li').first();

    expect(item.props().children).toContain('incompleta');
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
