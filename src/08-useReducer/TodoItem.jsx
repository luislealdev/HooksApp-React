import React from 'react'

export const TodoItem = ({todo={}, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between mt-3">
    <span className={`align-self-center ${todo.done?'text-decoration-line-through':''}`} onClick={()=>onToggleTodo(todo.id)}>{todo.todo}</span>
    <button className="btn btn-danger" onClick={()=>onDeleteTodo(todo.id)}>Delete</button>
    </li>
  )
}
