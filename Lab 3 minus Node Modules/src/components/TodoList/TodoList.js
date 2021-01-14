import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
const Todolist = ({todos, removeHandler, updateTodo }) => 
<div>
    {todos.map((t, i)=>(
        <TodoItem key={i} todo={t} removeHandler={removeHandler} updateTodo={updateTodo} />
    ))}
</div>;

export default Todolist;