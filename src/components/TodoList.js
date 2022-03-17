import React from 'react';
import TodoCard from "./TodoCard";


const TodoList = (props) => {

    console.log(props)
    return (
        <div>
            TodoList
            {
                props.todos.map(
                    (todo) => <TodoCard todo={todo} />
                )
            }
        </div>
    );
};

export default TodoList;