import { useState, useEffect, useRef } from 'react'

import './status.css'

import happyVetor from '../../../assets/svg/emoji/happy.svg'
import midVetor from '../../../assets/svg/emoji/mid.svg'
import sadVetor from '../../../assets/svg/emoji/sad.svg'



export function Status({npsScore}) {

    const status = {
        good: {
            vetor: happyVetor,
            statusTxt: "Excelent",
            color: "#77E4B2"
        },
        mid: {
            vetor: midVetor,
            statusTxt: "Mid",
            color: "#FFDF3E"

        },
        bad: {
            vetor: sadVetor,
            statusTxt: "Bad",
            color: "#F92E2F"

        }
    }
 
    const statusTxt = useRef(null)
    const [currentStatus, setCurrentStatus] = useState(status.good)

    useEffect(()=>{
        if (npsScore <= 30) {
            setCurrentStatus(status.bad)
        }
        if (npsScore <= 70 && npsScore >30) {
            setCurrentStatus(status.mid)
        }
        if (npsScore <= 100  && npsScore >70) {
            setCurrentStatus(status.good)

        }
    }, [npsScore])



    return (
        <div id="status" className='infoCard'>
            <h1 className="cardTitle ">General NPS</h1>
            <div id="nps-status">
                <img src={currentStatus.vetor} />
                <h1 id='statusTxt' ref={statusTxt} style={
                    { color: `${currentStatus.color}` }
                }>{currentStatus.statusTxt}!</h1>
            </div>
            <h1 className="cardSubtitle">NPS Score: <span className="cardValueTxt">{npsScore}</span></h1>
        </div>
    )
}