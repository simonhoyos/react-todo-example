import React from 'react';

export function TaskItem({ id, title, done, handleEdit, handleToggleTask }) {
  return (
    <li>
      {title} - {done ? 'completa' : 'incompleta'}
      <button
        onClick={() => handleEdit(id, title, done)}
        data-testid="edit-button"
      >
        Editar
      </button>
      <button
        onClick={() => handleToggleTask(id)}
        data-testid="toggle-button"
      >
        Completar
      </button>
    </li>
  );
}
