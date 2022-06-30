import { useTodos } from "../hooks/useTodos";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";


export const TodosApp = () => {

  const {todos, pending, complete, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos([]);

  return (
    <>
      <div className="row">
        <div className="col-7">
        <h1>TODOS App</h1>
        </div>
        <div className="col-5">
        <h6>Pending: {pending}</h6>
      <h6>Complete: {complete}</h6>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <AddTodo onNewTodo={handleNewTodo}/>
        </div>  
      </div>
    </>
  );
};
