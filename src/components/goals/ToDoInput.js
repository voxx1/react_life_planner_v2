import { useState } from "react";

const ToDoInput = (props) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");


    const task = {
        title: taskTitle,
        description: taskDescription
    }


    const formSubmitHandler = event => {
        event.preventDefault();
        props.addInput(task);
        setTaskTitle("")
        setTaskDescription("")

    }

    const titleHandler = (event) => {
        setTaskTitle(event.target.value)
    }

    const descriptionHandler = (event) => {
        setTaskDescription(event.target.value)
    }

    return (
        <form className="form" onSubmit={formSubmitHandler}>

            <div className="form--input">
                <label>Title of task</label>
                <input onChange={titleHandler} value={taskTitle} required type="text" />
            </div>
            <div className="form--input">
                <label>Description of task</label>
                <input onChange={descriptionHandler} value={taskDescription} required type="text" />
            </div>
            <button className="form--input-button" type="submit">Add new thing</button>
            <h3 style={{ textAlign: "center", color: "white" }}>You got {props.allItems.length} tasks left!</h3>
        </form>
    )
}

export default ToDoInput