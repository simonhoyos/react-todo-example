import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Tasks } from './Tasks';
import { TaskItem } from './TasksItem';



describe('<Tasks />', () => {
  it('should match snapshot', () => {
    const taskMock = { id: 0, title: 'una tarea', done: true };
    const wrapper = shallow(<TaskItem {...taskMock} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should show incomplete when task is undone', () => {
    const taskMock = { id: 0, title: 'una tarea', done: false };
    const wrapper = shallow(<TaskItem {...taskMock} />);

    const item = wrapper.find('li');
    expect(item.props().children).toContain('incompleta');
  });

  it('should execute handleEdit when task is click', () => {
    const handleEdit = jest.fn();
    const taskMock = { id: 0, title: 'una tarea', done: false };
    const wrapper = shallow(<TaskItem {...taskMock} handleEdit={handleEdit} />);

    const editButton = wrapper.find('[data-testid="edit-button"]');
    editButton.simulate('click');

    expect(handleEdit).toHaveBeenCalled();
  });

  it('should execute handleToggleTask when task is click', () => {
    const handleToggleTask = jest.fn();
    const taskMock = { id: 0, title: 'una tarea', done: false };
    const wrapper = shallow(<TaskItem {...taskMock} handleToggleTask={handleToggleTask} />);

    const editButton = wrapper.find('[data-testid="toggle-button"]');
    editButton.simulate('click');

    expect(handleToggleTask).toHaveBeenCalled();
  });
});
