import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../redux/actions/deleteTodos';

import './TodoListItem.css';

const TodoListItem = ({ todo, todoIndex }) => {
    const dispatch = useDispatch();

    const deleteTodos = () => {
        dispatch(deleteTodo(todoIndex));
    };

    const completeTodo = (e) => {
        e.target.classList.toggle('todo-list-item-complete');
    };

    return (
        <div className="todo-list-item">
            <p onClick={completeTodo}>{todo}</p>
            <div className="todo-buttons">
                <button onClick={deleteTodos} className="todo-list-item-del fa fa-trash"></button>
            </div>
        </div>
    );
};

export default TodoListItem;
