import { CREATE_TODO, REMOVE_TODO, MARK_COMPLETED } from './actions';

const initialState = [
    {
        text: "Make a todo-list using React",
        isCompleted: true
    }
]

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case MARK_COMPLETED: {
            const { text } = payload;
            return state.map(todo => todo.text === text ? { text, isCompleted: true } : todo);
        }
        default:
            return state;
    }
}