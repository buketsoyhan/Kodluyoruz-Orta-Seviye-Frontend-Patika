import React from "react";

function Body({ todos, removeTodo, handleToggle}) {
  return (
    <div>
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
    </div>
  );
}

export default Body;
