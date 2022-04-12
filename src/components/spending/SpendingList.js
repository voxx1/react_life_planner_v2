import SpendingData from "./SpendingData"

const SpendingList = (props) => {

    if (props.items.length === 0) {
        return <h2 style={{ textAlign: 'center', margin: 10 }}>There is nothing to show :(</h2>
    }
    return (
        <div>
            {props.items.map(spending => <SpendingData title={spending.title} amount={spending.amount} date={spending.date} key={spending.id} />)
            }
        </div>
    )
}

export default SpendingList