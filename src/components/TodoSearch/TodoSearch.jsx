import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../redux/actions/addTodos';

import './TodoSearch.css';

const TodoSearch = () => {
    const dispatch = useDispatch();

    const [todo, setTodo] = React.useState('');

    const onChangeTodo = (e) => {
        setTodo(e.target.value);
    };

    const inputTodoRef = React.useRef();

    const addTodo = () => {
        if (!todo) {
            alert('Пожалуйста введите текст');
        } else {
            dispatch(addTodos(todo));
            setTodo('');
            inputTodoRef.current.value = '';
        }
    };

    return (
        <div className="todo-search">
            <input
                ref={inputTodoRef}
                onChange={onChangeTodo}
                type="text"
                placeholder="Введите текст вашей задачи"
            />
            <button onClick={addTodo} className="todo-add-task fa fa-plus"></button>
        </div>
    );
};

export default TodoSearch;
