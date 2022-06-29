const initialValue = [{
    id: 1,
    todo: 'Be cool',
    complete: false
}]

const todoReducer = (status = initialValue, action = {}) => {

    if(action.type === '[TODO] Add new todo'){
       return [...status, action.payload];
    }


    return status;
}

let newTodo = {
    id: 2,
    todo: 'Go to the barber',
    complete: false
}

const addTodoAction = {
    type: '[TODO] Add new todo',
    payload: newTodo
}

let todos = todoReducer();
console.log(todos);

todos = todoReducer(initialValue, addTodoAction);
console.log(todos);

