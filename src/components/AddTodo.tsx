'use client'
import { useState } from "react";
import {FaPlus } from "react-icons/fa";

interface AddTodoProps {
onAdd : (text:string) => void
}

const AddTodo = ({onAdd}:AddTodoProps) => {
   const [todo, setTodo] = useState<string>("");


   const handleAdd = (): void => {
    if (!todo.trim()) return;
    onAdd(todo);
    setTodo("")
   }
  

  return (
    <div className='add-todo mt-5 flex w-full justify-center'>
        <input type="text" className='py-2 px-2.5 w-full text-2xl bg-white border-2 border-gray-500 rounded outline-none' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter Item' />
        <button className='bg-green-500 px-6 text-white py-2 flex items-center gap-1 rounded ml-2 cursor-pointer text-xl font-medium' onClick={handleAdd}>ADD <FaPlus color="white" size={15}/></button>
    </div>
  )
}

export default AddTodo