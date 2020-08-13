export const addTodos = (items) => {
    return {
        type: 'ADD_TODOS',
        payload: items,
    };
};
