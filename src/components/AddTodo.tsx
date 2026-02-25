import { FaTrash, FaPlus, FaEdit, FaArrowsAlt } from "react-icons/fa";
const AddTodo = () => {
  return (
    <div className='add-todo mt-5 flex w-full justify-center'>
        <input type="text" className='py-2 px-2.5 w-full text-2xl bg-white border-2 gray-500 rounded' placeholder='Enter Item' />
        <button className='bg-green-500 px-6 text-white py-2 flex items-center gap-1 rounded ml-2 cursor-pointer text-xl font-medium'>ADD <FaPlus color="white" size={15} /></button>
    </div>
  )
}

export default AddTodo