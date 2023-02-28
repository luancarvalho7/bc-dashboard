import { useState } from 'react'
import './SalesGraph.css'
import {Counter} from '../../utils/counter.jsx'
import fullEclipse from '../../assets/svg/graph/full-eclipse.svg'

export function SalesGraph() {
    const sGoal = 100
    const sAchieved = 11
    const sPercentage = (sAchieved / sGoal) * 100
    const [currentDashOffset, setcurrentDashOffset] = useState(515)
    setTimeout(() => {
        setcurrentDashOffset((100 - sPercentage) * 5.15)
    }, 200 ); 
    

    return (
        <div id="salesGraph" className='infoCard'>
            <h1 className="cardTitle ">Concluded Sales</h1>
            <div className="mainGraph">
                <div className="graphText">
                    <h1 className='graphMainInfoTxt'><Counter value={sAchieved}/>%</h1>
                    <h2 className='graphSubInfoTxt'>achieved</h2>
                </div>
                <img src={fullEclipse} />
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px" id='sCircleStroke'>
                    <defs>
                        <linearGradient id="BlueGradient">
                            <stop offset="0%" stopColor="#2997FF" />
                            <stop offset="100%" stopColor="#1600FF" />
                        </linearGradient>
                    </defs>
                    <circle style={{ strokeDashoffset: currentDashOffset }} cx="100" cy="100" r="83" strokeLinecap="round" id='salesCircle' />
                </svg>
            </div>
            <ul className="graphSubtitle">
                <li><div className='miniCircle cardSubtitle'></div>Goal: <span className='cardValueTxt'>{sGoal}</span></li>
                <li><div id="sAchievedCircle" className='miniCircle cardSubtitle' ></div>Achieved: <span className='cardValueTxt'>{sAchieved}</span></li>
            </ul></div>)
}