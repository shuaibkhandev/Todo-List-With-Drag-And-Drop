import { Todo } from "@/app/page";
import { FaTrash, FaEdit, FaArrowsAlt } from "react-icons/fa";

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({todos}:TodoListProps) => {
  return (
    <div className='todo-list flex flex-col gap-1 justify-center mt-8'>
        {todos.map((todo)=>{

return(
    <div key={todo.id} className="flex">
    <button className='bg-gray-200 px-3 rounded mr-2 cursor-grab text-2xl font-medium'><FaArrowsAlt color="gray" /></button>
    <div className="relative w-full">
      {/* <span className="absolute bg-green-400 w-6.5 h-6.5 rounded-2xl text-center -ml-1.25 text-white">{index+1}</span> */}
    <input className='py-2 px-4  w-full text-2xl border-2 border-gray-200 rounded outline-0' value={todo.text} readOnly/>
    </div>
    <button className='bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium'><FaEdit size={20} color="blue" /></button>
        <button className='bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium'><FaTrash size={20} color="red" /></button>
    </div>
)
             
        })}
    
 
    </div>
  )
}

export default TodoList