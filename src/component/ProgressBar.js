import React from 'react'

function ProgressBar({value = 0}) {
  return (
    <div className='progressbar'>
      <span> {value.toFixed()}%</span>
    </div>
  )
}

export default ProgressBar
