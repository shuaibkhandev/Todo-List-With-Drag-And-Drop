import AddTodo from "@/components/AddTodo"
import TodoList from "@/components/TodoList"


const Home = () => {
  return (
    <>
    <div className="todo-list-wrapper bg-gray-600 h-screen px-2 py-5 md:pt-20">
  <div className="today-list-container w-full md:w-8/12 p-2  sm:p-5 rounded m-auto bg-white">
    <h2 className="text-4xl text-center font-bold">Todo List</h2>
    <AddTodo/>
    <TodoList/>
    </div>
    </div>
    </>
  )
}

export default Home