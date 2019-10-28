import React from 'react';
import { TaskItem } from './TasksItem';
import { TasksConsumer } from '../Context';

export function Tasks() {
  return (
    <TasksConsumer>
      {({ tasks }) => (
        <ul>
          {tasks.length > 0 && tasks.map(({ id, title, done }) => {
            return (
              <TaskItem
                key={id}
                id={id}
                title={title}
                done={done}
              />
            );
          })}
        </ul>
      )}
    </TasksConsumer>
  );
}
