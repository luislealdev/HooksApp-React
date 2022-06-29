import { useReducer } from "react";
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

  return (
    <>
      <h1>TODOS App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
          {todos.map((todo) =>(
            <li key={todo.id}className="list-group-item d-flex justify-content-between mt-3">
            <span className="align-self-center">Item 1</span>
            <button className="btn btn-danger">Delete</button>
            </li>
          ))}
          </ul>
        </div>
        <div className="col-5">
            <input 
            type="text"
            className="form-control"
            placeholder="Enter new TODO"
            
            />
            <button className="btn btn-outline-primary mt-1" type="submit">Add</button>
        </div>
      </div>
    </>
  );
};
