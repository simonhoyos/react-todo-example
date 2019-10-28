import React from 'react';
import { TaskItem } from './TasksItem';

export function Tasks({ tasks, handleEdit, handleToggleTask }) {
  return (
    <ul>
      {tasks.length > 0 && tasks.map(({ id, title, done }) => {
        return (
          <TaskItem
            key={id}
            id={id}
            title={title}
            done={done}
            handleEdit={handleEdit}
            handleToggleTask={handleToggleTask}
          />
        );
      })}
    </ul>
  );
}
