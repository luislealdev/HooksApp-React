import { useReducer } from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    todo: "Learn React",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    todo: "Learn Python",
    done: false,
  },
];



export const TodosApp = () => {
  const [todos, todosDispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] add todo',
      payload: todo
    } 
    todosDispatch(action);
  }

  return (
    <>
      <h1>TODOS App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <AddTodo onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};
