const ToDoItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li onClick={deleteHandler}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

export default ToDoItem