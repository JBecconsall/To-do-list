import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState('')
  return (
    <form className='mb-4 font-sans w-full'>
        <input type='text' className='outline-none background-transparent border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' 
        placeholder='What is the task today?' />
        <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2'>Add Task</button>
    </form>
  )
}

export default Form
