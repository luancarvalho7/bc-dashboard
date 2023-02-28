import './graph.css'
import { useState } from 'react'
import { Bar } from './bar.jsx'
export function WkSalesGraph() {
    const currentWeek = [
        { day: 'mon', quanty: 10 },
        { day: 'tue', quanty: 20 },
        { day: 'wed', quanty: 25 },
        { day: 'thu', quanty: 22 },
        { day: 'fri', quanty: 8 },
        { day: 'sat', quanty: 6 }
    ]
    const allSales = 66

    const [averageQty, setAverageQty] = useState(0)
    const [opacity, setOpacity] = useState(0)
    setTimeout(() => {
        setAverageQty((allSales / 7) * 10)
        setOpacity(100)
    }, 600);



    return (
        <div id="wkSalesGraph">
            <div className="gAverageLine" style={{ bottom: averageQty, opacity: opacity }}></div>
            <div id="allDays">
                {currentWeek.map(day => <Bar key={day.day} day={day.day} quanty={day.quanty} />)}
            </div>
        </div>
    )
}   