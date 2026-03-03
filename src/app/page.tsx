"use client";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { todo } from "node:test";
import { useEffect, useState } from "react";

export interface Todo {
  id: string;
  text: string
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  })

  const addTodo = (text: string): void => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text:text
    }

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const updateTodo = (id:string, newText:string): void => {
   setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  const deleteTodo = (id:string) => {
   setTodos((prev)=> prev.filter((todo) => todo.id != id))
  }

  const reorderTodo = (newTodos: Todo[]): void => {
    setTodos(newTodos);
  }
  return (
    <>
      <div className="todo-list-wrapper bg-gray-600 min-h-screen px-2 py-5 md:pt-20">
        <div className="today-list-container w-full md:w-8/12 p-2  sm:p-5 rounded m-auto bg-white">
          <h2 className="text-4xl text-center font-bold">Todo List</h2>
          <AddTodo onAdd={addTodo} />
          <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} onReorder={reorderTodo} />
        </div>
      </div>
    </>
  );
};

export default Home;
