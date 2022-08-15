import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const Todo =({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? 'flex justify-between p-4 bg-slate-400 m-auto mb-3' : 'flex justify-between p-4 bg-slate-200 m-auto mb-3' }>
        <div className='flex'>
            <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : null } className="cursor-pointer"/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? 'text-xl ml-2 cursor-pointer line-through' : 'text-xl ml-2 cursor-pointer'}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)}><FaRegTrashAlt /></button>
    </li>
  )
}

export default Todo
