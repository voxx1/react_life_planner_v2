import { useState } from "react"
import SpendingFilter from "./SpendingFilter"
import SpendingList from "./SpendingList"
import SpendingChart from "./SpendingChart"

const Spending = (props) => {

    const [showYear, setShowYear] = useState("2022")



    const filterChangeHandler = (selectedYear) => {
        setShowYear(selectedYear)

    }
    const filteredResults = props.items.filter(spending => {
        return spending.date.getFullYear().toString() === showYear
    })



    return (
        <div>
            <SpendingFilter selected={showYear} onYearChange={filterChangeHandler} />
            <SpendingChart spending={filteredResults} />
            <SpendingList items={filteredResults} />
        </div>
    )
}

export default Spending