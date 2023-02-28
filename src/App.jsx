import './assets/css/global.css'
import './assets/css/graphs.css'
import './assets/css/texts.css'
import { Dropdown } from './components/dropdown/dropdown.jsx'
import { Status } from './components/Status/status'
import { SalesGraph } from './components/SalesGraph/SalesGraph'
import { MonthlyGoal } from './components/MonthlyGoal/MonthlyGoal'
import { WeeklyGraph } from './components/WeeklyGraph/WeeklyGraph'
export function App() {


  return (
    <>
      <Dropdown />
      <main>
        <section id="dashboard">
          <div id="topDashb">
            <Status />
            <div id="topGraphs">
              <SalesGraph />
              <MonthlyGoal />
            </div>
          </div>
          <WeeklyGraph />
        </section>
      </main>
    </>
  )
}

