import { useRef, useState } from "react"
export function Bar({ day, highestValue, quanty,  }) {
    const bar = useRef()
    const [barHeight, setBarHeight] = useState(0)
    setTimeout(() => {
        setBarHeight(quanty*(250/highestValue))
    }, 100);

    return (
        <div className="dayBar">
            <div className="db-Bar" ref={bar} style={{ height: barHeight }}>
            </div>
            <h1 className="cardSubtitle">{day}</h1>
        </div>
    )
}