/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer({categorizedTodos, categoryHandle, clearCompleted, activeCategory}) {


    return (
        <div className='footer'>
            <span className='todo-count'>
                <strong> { categorizedTodos.length } </strong>
                 item{categorizedTodos.length>1 && "s "} 
                left
            </span>
            <ul className='filters'>
                <li onClick={()=>categoryHandle("All")}>
                    <a className={activeCategory==="All" ? "selected" : null}>
                        All
                    </a>
                </li>
                <li onClick={()=>categoryHandle("Active")}>
                    <a className={activeCategory==="Active" ? "selected" : null}>
                        Active
                    </a>
                </li>
                <li onClick={()=>categoryHandle("Completed")}>
                    <a className={activeCategory==="Completed" ? "selected" : null}>
                        Completed
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
