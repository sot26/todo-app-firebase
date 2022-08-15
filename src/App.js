import { addDoc, collection, onSnapshot, query, QuerySnapshot, updateDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo';
import {db} from "./firebase"
import {doc, deleteDoc} from "firebase/firestore"
import { async } from '@firebase/util';



function App() {
  const [todos, setTodos] = useState(['new'])
  const [input, setInput] = useState("")
  console.log(input)

  function handleInput(event){
    setInput(event.target.value)
  }
  const createTodo = async (e) => {
    e.preventDefault(e)
    if (input === ""){
      alert('Please input a todo')
      return
    } 
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput("")
  }

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot)  => {
      let todosArr = []
      QuerySnapshot.forEach((doc) =>{
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })
    return () => unsubscribe
  }, [])

  const toggleComplete = async (todo) => {
    await updateDoc(doc (db, 'todos', todo.id), {
      completed:!todo.completed
    })
  }
  
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className="bgColor w-full h-screen flex">
      <div className='bg-gray-100 max-w-[500px] w-full flex  flex-col  h-auto rounded-xl sm:m-auto p-4 mx-6 my-auto'>
        <div className='my-4'>
          <p className='text-3xl font-bold text-center'>Todo App</p>
        </div>
        <form onSubmit={createTodo} className='flex justify-between w-full'>
          <input value={input} onChange={handleInput} type='text' placeholder='Add Todos' className='h-13 border w-full text-xl p-2'/>
          <button className='bg-[#2A0944] text-white ml-2 p-2'><AiOutlinePlus size={30}/></button>
        </form>
        <ul className='my-3 '>
        {todos.map((todo, index)=> 
          (
          <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          )
        )}
        </ul>
        {
          todos.length < 1 ? null : <p className='flex justify-center font-bold'>{`You have ${todos.length} todos`}</p>
        }
        
      </div>
    </div>
  );
}

export default App;
