import React from 'react'

interface roleDiceProps{
    roleDice:()=>void,
    currentDice :number
}
const RoleDice:React.FC<roleDiceProps> = (props)=> {
  return (
    <div onClick={props.roleDice} className=' justify-items-center cursor-pointer inline-block'>
        <img src={`/image/dice_${props.currentDice}.png`}/>
        <p>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice