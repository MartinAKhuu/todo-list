import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, markCompleted } from '../redux/actions';
import matchHeightItems from './utility/matchHeightItems';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <>
        <div className="lines match-height-items" />
        <div className="match-height-items">
            <NewTodoForm />
            <div className="todo-list">
                {todos.map((todo, i) => <TodoListItem
                    key={i}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}></TodoListItem>)}
            </div>
        </div>
        {matchHeightItems()}
    </>
);

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markCompleted(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);