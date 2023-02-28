import './WeeklyGraph.css'
import { WkSalesGraph } from './wkSalesGraph/graph'

import greenUpArrow from '../../assets/svg/icons/green-uparrow.svg'
import redDownArrow from '../../assets/svg/icons/red-downarrow.svg'

export function WeeklyGraph() {
    const bestDay = 'Friday'
    const worstDay = 'Monday'

    return (
        <section id="weeklyGraph">
            <h1 className='cardTitle'> Daily sales per Week</h1>
            <div id="wg-container">
                <div id="wg-info">
                    <div className='dayRank'>
                        <div className="dr-title"><img src={greenUpArrow}></img><h2 className='cardSubtitle'>Best sales day</h2></div>
                        <h1>{bestDay}</h1>
                    </div>
                    <div className='dayRank'>
                        <div className="dr-title"><img src={redDownArrow}></img><h2 className='cardSubtitle'>Worst sales day</h2></div>
                        <h1>{worstDay}</h1>
                    </div>
                </div>
                <div id="graphArea">
                    <WkSalesGraph />
                </div>
            </div>
        </section>
    )
}