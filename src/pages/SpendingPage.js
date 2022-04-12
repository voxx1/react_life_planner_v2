import Card from "../components/spending/Card"
import NewSpending from "../components/spending/NewSpending"
import Spending from "../components/spending/Spending"
import { useState } from "react"
import DUMMY_SPENDING from "../components/dummy-data/dummy_spending"
import MainHeader from "../components/UI/MainHeader"

const SpendingPage = () => {

    const [totalSpending, setTotalSpendings] = useState(DUMMY_SPENDING)


    const getNewSpending = spending => {
        setTotalSpendings(prevSpending => {
            return [spending, ...prevSpending]
        })

    }
    return (
        <Card>
            <MainHeader />
            <NewSpending onAddNewSpending={getNewSpending} />
            <Spending items={totalSpending} />
        </Card>
    )
}

export default SpendingPage