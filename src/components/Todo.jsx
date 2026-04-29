import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p7 min-h-[550px] rounded-xl'>

    <div className='flex items-center mt-8 ml-5 gap-3'>
        <img className='w-8' src={todo_icon} alt=""/>

        <h1 className='text-3xl font-semibold'>To-Do List</h1>
    </div>


    </div>
  )
}

export default Todo