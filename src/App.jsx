import { useState, useEffect } from 'react'
import './assets/css/global.css'

import data from "./utils/data.json"

import { Dropdown } from './components/dropdown/dropdown.jsx'
import { Dashboard } from './components/dashboard/dashboard'

export function App() {

  
  let [weekNumber, setWeekNumber] = useState(0)
  return (
    <>
      <Dropdown func={setWeekNumber}/>
      <main>
        <Dashboard data={data} currentWeek={weekNumber}/>
      </main>
    </>
  )
}

