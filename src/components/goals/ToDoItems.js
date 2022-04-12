import ToDoItem from "./ToDoItem"

const ToDoItems = (props) => {
    return (
        <>
            <ul className="items--list">
                {props.allItems.map(item => <ToDoItem key={item.id} id={item.id} onDelete={props.deleteHandler} title={item.title} description={item.description} />)}
            </ul>
            <p style={{ fontSize: "1.3rem" }}>Click on task to delete it.</p>
        </>
    )
}

export default ToDoItems