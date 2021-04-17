import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item p-3">
        <h3>{todo.text}</h3>
        {todo.isCompleted === false
            ? <button onClick={() => {
                onCompletedPressed(todo.text)
            }}>Mark as Completed</button>
            : <button disabled>Completed</button>}
        <button onClick={() => {
            onRemovePressed(todo.text);
        }}>Remove</button>
    </div>
);

export default TodoListItem;