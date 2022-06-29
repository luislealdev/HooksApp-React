export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case '[TODO] Add new todo':
                throw new Error('Nothing happening');
            break;
        default:
            return state;
    }
}