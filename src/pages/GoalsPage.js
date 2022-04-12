import { useState } from "react";
import ToDoInput from "../components/goals/ToDoInput"
import ToDoItems from '../components/goals/ToDoItems'
import DUMMY_GOALS from "../components/dummy-data/dummy_goals";
import MainHeader from "../components/UI/MainHeader";


const GoalsPage = () => {

    const [allToDo, setAllToDo] = useState(DUMMY_GOALS)


    const newInputHandler = enteredValue => {
        setAllToDo(prevToDo => {
            const updatedToDo = [...prevToDo]
            updatedToDo.push({ id: Math.random().toString(), title: enteredValue.title, description: enteredValue.description });
            return updatedToDo
        })

    }

    const deleteToDo = ToDoId => {
        setAllToDo(prevToDo => {
            const updatedToDo = prevToDo.filter(item => item.id !== ToDoId);
            return updatedToDo
        })
    }



    let content = <p className='empty--list'>There is nothing left on the list! :)</p>

    if (allToDo.length > 0) {
        content = <ToDoItems deleteHandler={deleteToDo} allItems={allToDo} />
    }


    return (
        <div className='main--content'>
            <MainHeader />

            <ToDoInput allItems={allToDo} addInput={newInputHandler} />
            {content}
        </div>
    )
}

export default GoalsPage