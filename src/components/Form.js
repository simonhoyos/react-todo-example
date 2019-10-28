import React from 'react';
import { TasksConsumer } from '../Context';

export function Form() {
  return (
    <TasksConsumer>
      {({ title, editingId, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Nombre de la tarea</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={title}
          />
          <button type="submit">{editingId > -1 ? 'Editar tarea' : 'Crear nueva tarea'}</button>
        </form>
      )}
    </TasksConsumer>
  );
}
