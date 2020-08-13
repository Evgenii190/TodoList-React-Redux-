import { createStore } from 'redux';
import { ChangeTodosReducer } from './redux/reducers/changeTodos';

const store = createStore(
    ChangeTodosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
