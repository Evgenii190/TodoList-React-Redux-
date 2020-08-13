export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: index,
    };
};
