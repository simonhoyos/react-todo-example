import React from 'react';
import { TasksConsumer } from '../Context';

export function TaskItem({ id, title, done }) {
  return (
    <TasksConsumer>
      {({ handleEdit, handleToggleTask }) => (
        <li>
          {title} - {done ? 'completa' : 'incompleta'}
          <button onClick={() => handleEdit(id, title, done)}>Editar</button>
          <button onClick={() => handleToggleTask(id)}>Completar</button>
        </li>
      )}
    </TasksConsumer>
  );
}
