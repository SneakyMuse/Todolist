import React, {useState} from 'react';

const TodoForm = (props) => {

    console.log(props)
    const setTodos = props.setTodos
    const todos = props.todos
    //const [todo, setTodo] = useState({title: '', comment: ''})
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        let newTodo = {title:title,comment:comment}
        let newTodos = [...todos]
        newTodos.push(newTodo)
        setTodos(newTodos)
    }

    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="titre" onChange={ (e) => setTitle(e.currentTarget.value) }/>
                <input type="text" name="comment" placeholder="commentaire" onChange={ (e) => setComment(e.currentTarget.value) }/>
                <button onClick={ handleClick }>c'est parti</button>
            </form>
        </div>
    );
};

export default TodoForm;