import React from 'react';

const TodoCard = (props) => {

    console.log(props)
    const todo = props.todo
    return (
        <div>
            <strong>
            {
                todo.title
            }
            </strong>
            {
                todo.comment
            }
            <button>delete</button>
        </div>
    );
};

export default TodoCard;