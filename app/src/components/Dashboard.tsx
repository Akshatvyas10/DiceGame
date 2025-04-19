// import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
const startGame = ()=>{
    navigate('/play')
}
  return (
    <div className='md:flex  mt-10 '>
        <div className='w-full md:w-1/4 lg:w-1/2 md:ml-10 ml-5  mt-10 '>
            <img src='/image/dices.png'/>
        </div>
        <div className='text-center m-auto '>
            <h1 className='md:text-7xl text-4xl font-extrabold mb-8'>DICE GAME</h1>
            <button className='bg-gray-950 text-gray-50 px-10 py-3 rounded-md md:w-1/2 md:ml-48 hover:scale-105 duration-500' onClick={startGame}>Play Now</button>
        </div>
    </div>
  )
}

export default Dashboard