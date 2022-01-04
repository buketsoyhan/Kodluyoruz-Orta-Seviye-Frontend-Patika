import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'



function ToDo() {
    
    

    const [todos, setTodos] = useState([
        {
            id:"1",
            content:"learn js",
            isDone:true
        },
        {
            id:"2",
            content:"learn react",
            isDone:false
        },
        {
            id:"3",
            content:"have a life",
            isDone:false
        }
    ])

    useEffect (() => {
        console.log(todos);
    }, [todos])

    const removeTodo = (id) =>{
        const newTodos = todos.filter((todo) => 
            todo.id !==id
        )
        setTodos(newTodos);
    }
    const handleToggle = (id)=>{
        const updatedTodo = todos.find((todo)=>
        todo.id===id
        )
        updatedTodo.isDone = !updatedTodo.isDone
        const newTodos=todos.map((todo)=>
            todo.id===id ? updatedTodo : todo
        )
        setTodos(newTodos);
    }

    const [activeCategory, setactiveCategory] = useState("All");

    const categoryHandle = (category) =>{
        setactiveCategory(category);
    }

    const clearCompleted  = () =>{
        setTodos(todos.filter((todo) => todo.isDone === false))
    }

    const categorizedTodos = 
    activeCategory==="All"
    ?todos 
    :activeCategory==="Active"
    ?todos.filter((todo) => todo.isDone === false)
    :todos.filter((todo) => todo.isDone === true)


    return (
        <div>
            <div className='todoapp'>
                <Header todos={todos} addTodos={setTodos} /> 
                <Body todos={categorizedTodos} removeTodo={removeTodo} handleToggle={handleToggle} />
                <Footer categorizedTodos={categorizedTodos} categoryHandle={categoryHandle} clearCompleted={clearCompleted} activeCategory={activeCategory}/>

            </div>
        </div>
    )
}

export default ToDo;
