import React, { Fragment, useState } from 'react';

const InputTodos = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"
        } catch (error) {
            console.error(error);
        }
    }

return (
        <Fragment>
            <h1 className="text-center my-5">Add Todo</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    placeholder="add todo"
                    className="form-control"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};


export default InputTodos;