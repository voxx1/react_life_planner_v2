import { useState } from "react"
import './Card.css'

const SpendingForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")


    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const spendingData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onNewSpending(spendingData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }


    return (
        <form className="spending-form" onSubmit={submitHandler}>
            <div className="new-spending__controls">
                <div className="new-spending__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleHandler} required type="text" />
                </div>
                <div className="new-spending__control">
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountHandler} required type="number" min='0.01'
                        step='0.01' />
                </div>
                <div className="new-spending__control">
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateHandler} required type="date" min='2019-01-01'
                        max='2022-12-31' />
                </div>
            </div>
            <div className="new-spending__actions">
                <button className="spending-form-button-add" type="submit">Add one piece</button>
                <button className="spending-form-button-cancel" type="button" onClick={props.formHider}>Cancel</button>

            </div>



        </form>
    )
}

export default SpendingForm