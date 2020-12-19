import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import {TodoProps} from "./TodoStore";

const Actions = {
    addTodo(todo: TodoProps) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            payload: {todo},
        });
    },
};

export default Actions;
