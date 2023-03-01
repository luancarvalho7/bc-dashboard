
import { useState, useEffect } from 'react'
import { Counter } from '../../../utils/counter.jsx'
import './MonthlyGoal.css'
import fullEclipse from '../../../assets/svg/graph/full-eclipse.svg'


export function MonthlyGoal({ mGoal, achieved }) {
    if (typeof (mGoal) != 'number') {
        mGoal = 100
    }
    const [mAchieved, setMAchieved] = useState(0)
    if (typeof (achieved) == 'number') { useEffect(() => setMAchieved(achieved), [achieved]) }
    const mPercentage = (mAchieved / mGoal) * 100

    const [currentDashOffset, setcurrentDashOffset] = useState(515)
    setTimeout(() => {
        setcurrentDashOffset((100 - mPercentage) * 5.15)
    }, 200);


    return (
        <div id="monthlyGoal" className='infoCard'>
            <h1 className="cardTitle ">Monthly Goal</h1>
            <div className="mainGraph">
                <div className="graphText">
                    <h1 className='graphMainInfoTxt'><Counter value={mAchieved} /></h1>
                    <h2 className='graphSubInfoTxt'>achieved</h2>
                </div>
                <img src={fullEclipse} />
                <svg xmlns="http://www.w3.org/2000/svg" id='mCircleStroke' version="1.1" width="200px" height="200px" >
                    <defs>
                        <linearGradient id="GreenGradient">
                            <stop offset="0%" stopColor="#80DF8F" />
                            <stop offset="100%" stopColor="#6DE9DA" />
                        </linearGradient>
                    </defs>
                    <circle style={{ strokeDashoffset: currentDashOffset }} cx="100" cy="100" r="83" strokeLinecap="round" id='monthlyGoalCircle' />
                </svg>
            </div>
            <ul className="graphSubtitle">
                <li><div className='miniCircle cardSubtitle'></div>Goal: <span className='cardValueTxt'>${mGoal}</span></li>
                <li><div id="mAchievedCircle" className='miniCircle cardSubtitle' ></div>Achieved: <span className='cardValueTxt'>${mAchieved}</span></li>
            </ul></div>)
}