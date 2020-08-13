const initialState = {
    todos: [{ todos: 'Создать приложение' }, { todos: 'Закончить приложение' }],
};

export const ChangeTodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODOS':
            return {
                ...state,
                todos: [...state.todos, { todos: action.payload }],
            };
        case 'DELETE_TODO':
            let todos = state.todos;
            todos.splice(action.payload, 1);
            return {
                ...state,
                todos: [...todos],
            };

        default:
            return state;
    }
};
