import { useState, useEffect } from 'react'
import { Status } from './Status/status'
import { SalesGraph } from './SalesGraph/SalesGraph'
import { MonthlyGoal } from './MonthlyGoal/MonthlyGoal'
import { WeeklyGraph } from './WeeklyGraph/WeeklyGraph'

export function Dashboard({ data, currentWeek }) {

  let [{ sales, nps, salesGoal }, setProps] = useState(data.weeks[currentWeek])
  const price = data.price



  /* totalSales update */

  const [totalSales, setTotalSales] = useState(sales.reduce((a, c) => a + c))
  const [totalSalesCash,setTotalSalesCash] = useState(data.weeks.slice(0, currentWeek + 1).reduce((acc, week) => acc + week.sales.reduce((a, c) => a + c), 0)*price)
  useEffect(() => {
    setProps(data.weeks[currentWeek])
  }, [currentWeek, sales])

  useEffect(() => {
    setTotalSales(sales.reduce((a, c) => a + c))
    setTotalSalesCash(data.weeks.slice(0, currentWeek + 1).reduce((acc, week) => acc + week.sales.reduce((a, c) => a + c), 0)*price)
  }, [sales])






  return (
    <section id="dashboard">
      <div id="topDashb">
        <Status npsScore={nps}/>
        <div id="topGraphs">
          <SalesGraph sGoal={salesGoal} sales={totalSales} />
          <MonthlyGoal mGoal={data.monthlyGoal} achieved={totalSalesCash} />
        </div>
      </div>
      <WeeklyGraph data={sales} />
    </section>
  )
}