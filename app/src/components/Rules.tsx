// import React from 'react'

function Rules() {
  return (
    <div    className='border-2 inline-block bg-gray-50 p-3'>
         <h2 className='font-bold'>How to play dice game</h2>
      <ol className="text" type='A'>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ol>
    </div>
  )
}

export default Rules