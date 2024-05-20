import React, { useState } from 'react'


export default function Output() {
    const [ val, setVal ] = useState("10")
    const [ task, setTask ] = useState("Click Genarate")
    const handleval = (e)=>{
        setVal(e.target.value)
    }
    const apiCall= async()=>{
        setTask(0)
        let data = await fetch(`http://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=${val/100}`)
        let parsedData= await data.json()
        setTask(parsedData.activity)
    }
    return (
        <div id="output">
            <div id="genarator">
                <input type="range" id="rangeselector" min="0" max="100" step="5" value={val} onChange={handleval} />
                <div id="valbox">{val}</div>
                <button id="genarate" onClick={apiCall}>Genarate</button>
            </div>
            <div id="result">
                {task==0?"Loading..":task}
            </div>
        </div>
    )
}
