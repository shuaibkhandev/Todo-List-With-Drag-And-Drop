import { FaTrash, FaPlus, FaEdit, FaArrowsAlt } from "react-icons/fa";

const TodoList = () => {
  return (
    <div className='todo-list flex gap-1 justify-center mt-8'>
        <button className='bg-gray-200 px-3 rounded mr-2 cursor-grab text-2xl font-medium'><FaArrowsAlt color="gray" /></button>
           <input className='py-2 px-2.5 w-full text-2xl border-2 border-gray-200 rounded outline-0' value={"Apple"} readOnly/>
        <button className='bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium'><FaEdit size={20} color="blue" /></button>
        <button className='bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium'><FaTrash size={20} color="red" /></button>
    </div>
  )
}

export default TodoList