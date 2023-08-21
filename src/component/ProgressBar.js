import React from 'react'
import {useState,useEffect,} from 'react'


function ProgressBar({value = 0}) {

    const [percent,setPercent] = useState(value)

    useEffect(()=>{
        // edge case max 100 min 0
        setPercent(Math.min(100,Math.max(value,0)))

    },[value])

  return (
    <div className='progressbar'>

      <span  style={{color:percent > 49 ? 'white' : 'black'}}> {percent.toFixed()}%</span>
      <div style={{width:`${percent}%` } }></div>

    </div>
  )
}

export default ProgressBar
