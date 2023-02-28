import { useRef, useState } from "react"
export function Bar({ day, quanty }) {
    const bar = useRef()
    const x = quanty*10
    const [barHeight, setBarHeight] = useState(0)
    setTimeout(() => {
        setBarHeight(x)
    }, 100);

    return (
        <div className="dayBar">
            <div className="db-Bar" ref={bar} style={{ height: barHeight }}>
            </div>
            <h1 className="cardSubtitle">{day}</h1>
        </div>
    )
}