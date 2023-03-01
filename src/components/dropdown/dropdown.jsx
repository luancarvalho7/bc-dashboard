import { useState, useRef, useEffect } from 'react'
import './dropdown.css'

export function Dropdown({func}) {


    /* enable/disable dropdown */
    const [isActive, setIsActive] = useState(false)
    function handleSelectWeek() {
        setIsActive(!isActive)
        
    }


    /* real dropdown sync  */

    const select = useRef(null)


    const [currentValue, setcurrentValue] = useState(1)

    function handleCurrentWeek() {
        setcurrentValue(select.current.value)
    }   

    useEffect(() => { select.current.value = currentValue;
        func(currentValue-1)
     }, [currentValue])


    /* custom dropdown sync */

    const dd1 = useRef(null)
    const dd2 = useRef(null)
    const dd3 = useRef(null)


    const listItens = [null, dd1, dd2, dd3]


    function syncDD(value) {
        listItens[2].current.classList.add('disabled')
        for (let i = 1; i < listItens.length; i++) {
            if (i == value) {
                listItens[i].current.classList.add('disabled')
            }
            else
                listItens[i].current.classList.remove('disabled')
        }
    }
    useEffect(() => syncDD(currentValue), [currentValue])

    function clickCustomDD(value) {
        setcurrentValue(value)
        handleSelectWeek()
    }



    return (
            <div id="selectButton">
                <select id='select' ref={select} onChange={handleCurrentWeek}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>


                <ul id="selectWeek" >
                    <li className='dd-selected dd-item' onClick={handleSelectWeek} ><h1>Week {currentValue}</h1> <div id='dd-indicator' className={isActive ? "dd-indicator-open" : "dd-indicator-closed"}></div></li>
                    <ul id='dropdown' className={isActive ? "" : "disabled"}>
                        <li className='dd-item' ref={dd1} onClick={() => clickCustomDD(1)}><h1>Week 1</h1></li>
                        <li className='dd-item' ref={dd2} onClick={() => clickCustomDD(2)}><h1>Week 2</h1></li>
                        <li className='dd-item' ref={dd3} onClick={() => clickCustomDD(3)}><h1>Week 3</h1></li>
                    </ul>
                </ul>
            </div>
    )
}