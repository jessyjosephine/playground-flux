import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Immutable from 'immutable';

export type StoreActions = {
    type: TodoActionTypes,
    payload: Record<string, any>
}

export type TodoProps = {
    id: string,
    complete: boolean,
    text: string,
}

export type ListofTodoProps = Immutable.Record<TodoProps>

const initialTodos: ListofTodoProps = Immutable.Record<TodoProps>({
    id: '',
    complete: false,
    text: '',
});

class TodoStore extends ReduceStore<ListofTodoProps, StoreActions> {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState(): ListofTodoProps {
        return initialTodos;
    }

    reduce(state: ListofTodoProps, action: StoreActions) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                // Do nothing for now, we will add logic here soon!
                if (action.payload.todo as TodoProps) {
                    return state.set(action.payload.todo.id, action.payload.todo);
                }
                return state;

            default:
                return state;
        }
    }
}

export default new TodoStore();
