import React, { useState } from 'react'
import { TodoFormInitialValue, type ITodo } from './todo.schema'

interface IAddTodoProps {
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

function AddTodo({setTodos} : IAddTodoProps) {
    const [formData, setFormData] = useState<ITodo>(TodoFormInitialValue)

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // here you do some external task like api calling
        setTodos(prev => [...prev, formData])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // console.log(e.target.name, "filter")

        // if (typeof e.target.value === "number") {
        //     console.log("You cannot enter a number here");
        //     return;
        // }


    };

    console.log(formData, "filter data")

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='title'>Name</label>
            <input
                className='border-2'
                type="text" 
                name='title'
                value={formData.title}
                onChange={handleChange}
            />

        <label htmlFor="Description"></label>
            <textarea
                className='border-2' 
                name="description"
                value={formData.description}
                onChange={handleChange}
            />

            <label htmlFor="class">Class</label>
            <select name='class' className='border-2' onChange={handleChange}>
                <option value="react">React</option>
                <option value="node">Node</option>
                <option value="digitalMarketing">Digital Marketing</option>
                </select>

            <button 
                type='submit'
                // type=" button"
                // onClick={handleAddTodo} 
            >
                Add
            </button>
            <button type='button'>Edit</button>
        </form>
        )
}

export default AddTodo