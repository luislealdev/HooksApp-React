import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos =[], onDeleteTodo, onToggleTodo}) => {


  return (

    todos.length==0? <h6 className="alert alert-info">You have not added any tasks!</h6>:

    <ul className="list-group">
    {todos.map((todo) =>(
      <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
    ))}
    </ul>
  )
}
