import React from 'react';

export function Form({ title, editingId, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Nombre de la tarea</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChange}
        value={title}
        data-testid="input-title"
      />
      <button type="submit">{editingId > -1 ? 'Editar tarea' : 'Crear nueva tarea'}</button>
    </form>
  );
}
