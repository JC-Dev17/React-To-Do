import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") return;

    const newToDo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newToDo]);
    inputRef.current.value = "";
  };

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-4 sm:p-6 md:p-7 min-h-[500px] sm:min-h-[550px] rounded-xl'>

      {/* Header */}
      <div className='flex items-center mt-5 sm:mt-8 ml-2 sm:ml-5 gap-2 sm:gap-3'>
        <img className='w-6 sm:w-8' src={todo_icon} alt=""/>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* Input + Button */}
      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-0 my-5 sm:my-7 bg-gray-200 sm:rounded-full p-2'>
        
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-12 sm:h-14 px-4 placeholder:text-slate-600 w-full'
          type="text"
          placeholder='Add Your Task'
        />

        <button
          onClick={add}
          className='w-full sm:w-32 h-12 sm:h-14 rounded-full bg-green-600 text-white text-sm sm:text-lg font-medium cursor-pointer'
        >
          ADD +
        </button>

      </div>

      {/* Todo List */}
      <div className='space-y-2'>
        {todoList.map((item) => (
          <Todoitems key={item.id} text={item.text} />
        ))}
      </div>

    </div>
  )
}

export default Todo