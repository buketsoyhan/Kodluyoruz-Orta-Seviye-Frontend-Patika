import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./todo.css"
function Todo() {
    const [todos, setTodos] = useState([{}])
    const [value, setValue] = useState("");
    uuidv4();
    const initialState = ""
    const handleChange = (e) => {
        setTodos([...todos, { todo: e.target.value, isDone: false }])
        console.log({ todos });
    }

    useEffect(() => {
        console.log(todos);
    }, [todos])

    const removeTodo = (id) => {
        const newTodos = todos.filter((todo) =>
            todo.id !== id
        )
        setTodos(newTodos);
    }
    const handleToggle = (id) => {
        const updatedTodo = todos.find((todo) =>
            todo.id === id
        )
        updatedTodo.isDone = !updatedTodo.isDone
        const newTodos = todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
        )
        setTodos(newTodos);
    }

    const [activeCategory, setactiveCategory] = useState("All");

    const categoryHandle = (category) => {
        setactiveCategory(category);
    }

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => todo.isDone === false))
    }

    const categorizedTodos =
        activeCategory === "All"
            ? todos
            : activeCategory === "Active"
                ? todos.filter((todo) => todo.isDone === false)
                : todos.filter((todo) => todo.isDone === true)

    function onFormSubmit(e) {
        e.preventDefault();
        if (value === " ") {
            return false;
        }

        const todo = {
            id: uuidv4,
            content: value,
            isDone: false
        };
        console.log(todo)
        setTodos([...todos, todo])
        setValue(initialState)
    }


    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <form onSubmit={onFormSubmit}>
                        <input
                            placeholder='What needs to be done'
                            className='new-todo'
                            name='todo'
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />

                    </form>
                </header>

                <section className="main">
                    <input className="toggle-all" type="checkbox" onChange={handleChange} />
                    <label htmlFor="toggle-all">
                        Mark all as complete
                    </label>


                    <ul className="todo-list">
                        {todos.map((todo, index) => (
                            <li className={todo.isDone === true ? "completed" : null} key={index}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" onClick={() => handleToggle(todo.id)} />
                                    <label>{todo.content}</label>
                                    <button className="destroy" onClick={() => removeTodo(todo.id)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <footer className="footer">
                    <span className='todo-count'>
                        <strong> {categorizedTodos.length} </strong>
                        item{categorizedTodos.length > 1 && "s "}
                        left
                    </span>
                    <ul className='filters'>
                        <li onClick={() => categoryHandle("All")}>
                            <a className={activeCategory === "All" ? "selected" : null}>
                                All
                            </a>
                        </li>
                        <li onClick={() => categoryHandle("Active")}>
                            <a className={activeCategory === "Active" ? "selected" : null}>
                                Active
                            </a>
                        </li>
                        <li onClick={() => categoryHandle("Completed")}>
                            <a className={activeCategory === "Completed" ? "selected" : null}>
                                Completed
                            </a>
                        </li>
                    </ul>
                </footer>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    )
}

export default Todo