import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../redux/actions';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="todo-form">
            <div className="row no-gutters">
                <div className="col-10">
                    <input
                        id="todo-input"
                        className="h3"
                        type="text"
                        placeholder="Type your new to-do item"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                </div>
                <div className="col-2">
                    <button id="todo-submit"
                        onClick={() => {
                            const isDuplicateText =
                                todos.some(todo => todo.text === inputValue);

                            if (!isDuplicateText && inputValue.length !== 0) {
                                onCreatePressed(inputValue);
                                setInputValue('');
                            } else {
                                alert('Please enter a unique and non-empty to do.');
                            }
                        }}>
                        <i className="fas fa-edit" title="Create new to-do"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);