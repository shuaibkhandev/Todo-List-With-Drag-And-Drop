import { Todo } from "@/app/page";
import { useEffect, useRef, useState } from "react";
import { FaTrash, FaEdit, FaArrowsAlt } from "react-icons/fa";

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id:string, newText:string) => void;
  onDelete: (id:string) => void;
}

const TodoList = ({ todos, onUpdate, onDelete }: TodoListProps) => {
  const [editingId, setEditingId] = useState<string|null>(null);
  const [editText, setEditText] = useState<string>("")
  const selectedInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
  if (selectedInput.current) {
    selectedInput.current.focus();
  }
}, [editingId]);

  const handleEdit = (id:string, currentText:string):void => {
    setEditingId(id)
    setEditText(currentText)
  }

  const handleSave = (id:string) => {
    if (!editText.trim()) return;
     onUpdate(id, editText);
    setEditingId(null);
  }

  const handleDelet = (id:string) => {
    onDelete(id)
  }
  
  return (
    <div className="todo-list flex flex-col gap-1 justify-center mt-8">
      {todos?.map((todo) => {
        return (
          <div key={todo.id} className="flex">
            <button className="bg-gray-200 px-3 rounded mr-2 cursor-grab text-2xl font-medium">
              <FaArrowsAlt color="gray" />
            </button>
            {todo.id === editingId ?   <input
            ref={selectedInput}
                className="py-2 px-4  w-full text-2xl border-2 border-gray-200 rounded outline-0"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              /> :   <input
                className="py-2 px-4  w-full text-2xl border-2 border-gray-200 rounded outline-0"
                value={todo.text}
                readOnly
              /> }
            
            {todo.id === editingId ?     <button
              className="bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium"
              onClick={() => handleSave(todo.id,)}
            >
              save
            </button> :     <button
              className="bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium"
              onClick={() => handleEdit(todo.id, todo.text)}
            >
              <FaEdit size={20} color="blue" />
            </button>}

        
            <button className="bg-gray-200 px-3 rounded ml-2 cursor-pointer text-2xl font-medium" onClick={()=>handleDelet(todo.id)}>
              <FaTrash size={20} color="red" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
