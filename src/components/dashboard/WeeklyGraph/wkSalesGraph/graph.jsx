import './graph.css'
import { useState } from 'react'
import { Bar } from './bar.jsx'
export function WkSalesGraph({data, highestValue}) {
    const currentWeek = [
        { day: 'sun', quanty: data[0] },
        { day: 'mon', quanty: data[1] },
        { day: 'tue', quanty: data[2] },
        { day: 'wed', quanty: data[3] },
        { day: 'thu', quanty: data[4] },
        { day: 'fri', quanty: data[5] },
        { day: 'sat', quanty: data[6] },
    ]
    const allSales  = function allSalesCount(){
        let value = 0
        data.map(d => value += d)
        return value
    }

    const [averageQty, setAverageQty] = useState(0)
    const [opacity, setOpacity] = useState(0)
    setTimeout(() => {
        setAverageQty((allSales() / 7) * (250/highestValue))
        setOpacity(100)
    }, 600);



    return (
        <div id="wkSalesGraph">
            <div className="gAverageLine" style={{ bottom: averageQty, opacity: opacity }}></div>
            <div id="allDays">
                {currentWeek.map(day => <Bar 
                key={day.day} 
                highestValue={highestValue}
                day={day.day} 
                quanty={day.quanty}
                 />)}
            </div>
        </div>
    )
}   