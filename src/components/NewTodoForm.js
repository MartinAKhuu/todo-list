import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../redux/actions';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div class="todo-form">
            <div className="row no-gutters">
                <div class="col-9">
                    <input
                        id="todo-input"
                        type="text"
                        placeholder="Type your new to-do item"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                </div>
                <div className="col-3">
                    <button onClick={() => {
                        const isDuplicateText =
                            todos.some(todo => todo.text === inputValue);

                        if (!isDuplicateText && inputValue.length !== 0) {
                            onCreatePressed(inputValue);
                            setInputValue('');
                        } else {
                            alert('Please enter a unique and non-empty to do.');
                        }
                    }}>Create Todo</button>
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