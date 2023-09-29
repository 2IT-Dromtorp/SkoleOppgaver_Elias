import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      // Create a new to-do object with a unique ID and initial status of not finished
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        finished: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleFinished = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, finished: !todo.finished } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.finished ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleToggleFinished(todo.id)}>
              {todo.finished ? 'Unmark' : 'Mark'} as Finished
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
