import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import { useSelector } from 'react-redux';

import './TodoList.css';

const TodoList = () => {
    const { todos } = useSelector((todos) => todos);

    return (
        <div className="todoList">
            {todos.map((todo, index) => {
                return (
                    <TodoListItem
                        key={`${todo.todos}_${index}`}
                        todo={todo.todos}
                        todoIndex={index}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
