import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Tasks } from './Tasks';
import { TaskItem } from './TasksItem';

const tasksMock = [
  { id: 0, title: 'una tarea', done: true },
  { id: 1, title: 'segunda tarea', done: false },
  { id: 2, title: 'tercera tarea', done: false }
];

describe('<Tasks />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Tasks tasks={tasksMock} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render 3 tasks', () => {
    const wrapper = shallow(<Tasks tasks={tasksMock} />);
    const items = wrapper.find(TaskItem);

    expect(items).toHaveLength(3);
  });
});
