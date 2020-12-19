import React from 'react';
import './App.css';
import TodoContainer from "./todo/TodoContainer";

import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';

function getStores() {
    return [
        TodoStore,
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
    };
}

export default Container.createFunctional(TodoContainer, getStores, getState);
