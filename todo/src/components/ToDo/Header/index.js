import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
function Header({todos, addTodos}) {
    const [value, setValue] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        if(value === " ")
        {
            return false;
        }

        const todo = {
            id:uuid(), 
            content:value,
            isDone:false
        };
        console.log(todo)
        addTodos([...todos, todo])
        setValue("");

    }

    return (
        <div className='header'>
            <h1>Todos</h1>
            <form onSubmit={onFormSubmit}>
                <input 
                placeholder='What needs to be done'
                className='new-todo'
                name='todo'
                value={value}
                onChange={(event) => setValue(event.target.value) }
                /> 

            </form>
        </div>
    )
}

export default Header;
