import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'




function Todoitems({text}) {
  return (
    <div className='flex items-center my-3 gap-5'> 

    <div className='flex flex-1 items-center cursor-pointer'>
        <img className='w-7 h-7 ml-3' src={tick} alt=""/>
        <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
    </div>

    <img src={delete_icon} alt="" className='w-7 cursor-pointer'/>



    </div>
  )
}

export default Todoitems