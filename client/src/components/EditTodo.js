import React, { Fragment, useState } from 'react';

const EditTodo = ( {todo} ) => {

    const updateDescription = async (id) => {
        try {
            const body = { description };
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"
        } catch (error) {
            console.error(error);
        }
    }

    const [description, setDescription] = useState(todo.description);

    return (
        <Fragment>
            <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target={`#id${todo.tid}`}>
            Edit
            </button>

            <div class="modal" id={`id${todo.tid}`} onClick={() => setDescription(todo.description)}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit Todo</h4>
                    <button type="button"
                    class="close"
                    data-dismiss="modal"
                    onClick={() => setDescription(todo.description)}
                    >&times;</button>
                </div>

                <div class="modal-body">
                    <input type="text" className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
                </div>

                <div class="modal-footer">
                    <button type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick = {e => updateDescription(todo.tid)}>Edit</button>
                    <button
                    type="button"
                    class="btn btn-warning"
                    data-dismiss="modal"
                    onClick={() => setDescription(todo.description)}
                    >Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>


    )
}


export default EditTodo;