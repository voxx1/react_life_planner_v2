import SpendingDataDate from "./SpendingDataDate"
import './Card.css'

const SpendingData = (props) => {
    return (
        <div className="spending-item">
            <SpendingDataDate date={props.date} />
            <div className="spending-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="spending-item__price">{props.amount + " $"}</div>

        </div>
    )
}

export default SpendingData