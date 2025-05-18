import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import type { ITodo } from "./todo.schema";

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    return (
        <div className="w-full">
            <h1>Todo Page</h1>

            <AddTodo setTodos={setTodos} />  

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
                {
                    todos?.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Todo;