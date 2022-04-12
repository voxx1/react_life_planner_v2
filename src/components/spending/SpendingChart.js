import Chart from "./Chart"

const SpendingChart = (props) => {
    const chartDataPoints = [
        { label: "Sty", value: 0 },
        { label: "Lut", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Kwi", value: 0 },
        { label: "Maj", value: 0 },
        { label: "Cze", value: 0 },
        { label: "Lip", value: 0 },
        { label: "Sie", value: 0 },
        { label: "Wrz", value: 0 },
        { label: "Paź", value: 0 },
        { label: "Lis", value: 0 },
        { label: "Gru", value: 0 }


    ]

    for (const spending of props.spending) {
        const spendingMonth = spending.date.getMonth();
        chartDataPoints[spendingMonth].value += spending.amount
    }

    return (
        <Chart dataPoints={chartDataPoints} />

    )
}

export default SpendingChart