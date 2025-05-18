import type { ITodo } from "./todo.schema"

function TodoItem({todo} : { todo: ITodo }) {
  return (
    <div className="h-32 border border-gray-400 p-4 rounded-lg">
      <p>{todo.title}</p>

    </div>
  )
}

export default TodoItem