import React from 'react'

function Buttons(props) {
  return (
    <div>
        <button className='px-8 py-1 font-bold border text-red-500 border-red-500 rounded-full hover:text-white hover:bg-red-500'>{props.title}</button>
    </div>
  )
}

export default Buttons