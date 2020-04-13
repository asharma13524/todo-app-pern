import React, { Fragment, useState, useEffect } from 'react';
import EditTodo from './EditTodo';

const ListAllTodos = () => {
    const[todos, setTodos] = useState([]);

    //delete todo
    async function deleteTodo (id) {
        try {
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.tid !== id));
        } catch (error) {
            console.error(error);
        }
    }


    //get all todos
    async function getTodos () {
        try {
            const res = await fetch("http://localhost:5000/todos");
            const todoArray = await res.json();
            setTodos(todoArray);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            {" "}
            <table class="table mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {todos.map(todo => (
                    <tr key={todo.tid}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.tid)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListAllTodos;

