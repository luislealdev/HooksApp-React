import { useTodos } from "../hooks/useTodos";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";


export const TodosApp = () => {

  const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos([]);

  return (
    <>
      <h1>TODOS App</h1>
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
