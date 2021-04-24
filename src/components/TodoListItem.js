import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="row todo-item">
        <div className="col-10">
            {todo.isCompleted === false
                ?
                <h3>{todo.text}</h3>
                :
                <h3 className="completed">{todo.text}</h3>}
        </div>
        <div className="col-2 d-flex">
            {todo.isCompleted === false
                ?
                <button onClick={() => { onCompletedPressed(todo.text) }} className="todo-item-check">
                    <i className="far fa-check-square"></i>
                </button>
                :
                <button disabled className="todo-item-check">
                    <i className="fas fa-check-square"></i>
                </button>}
            <button onClick={() => { onRemovePressed(todo.text); }} className="todo-item-delete">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
);

export default TodoListItem;