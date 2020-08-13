import React from 'react';
import Header from '../Header/Header';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import { Provider } from 'react-redux';
import store from '../../store';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <TodoSearch />
            <TodoList />
        </Provider>
    );
};

export default App;
