import { useState } from "react";
import SpendingForm from "./SpendingForm"

const NewSpending = (props) => {

    const [isFormShown, setIsFormShown] = useState(false)

    const saveNewSpendingHandler = (enteredUserData) => {
        const spendingData = {
            ...enteredUserData,
            id: Math.random.toString()
        };
        props.onAddNewSpending(spendingData)
    };

    const showForm = () => {
        setIsFormShown(!isFormShown)
    }

    return (
        <div className="spending-form">
            <h1>Expenses in selected months</h1>
            {isFormShown ? <SpendingForm formHider={showForm} onNewSpending={saveNewSpendingHandler} /> : <button className="spending-form-button" onClick={showForm}>Add new spending</button>}

        </div>
    )
}

export default NewSpending