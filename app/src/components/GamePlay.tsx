import React, { useEffect, useState } from 'react'
import NumberSelector from './NumberSellector'
import TotalScore from './TotelScore'
import Rules from './Rules';
import RoleDice from './RoleDice';

function GamePlay() {
     const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState<any>();
  const [currentDice, setCurrentDice] = useState<number>(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice( randomNumber);
    if (selectedNumber != randomNumber) {
        setScore((prev) => prev - selectedNumber );
      
    } else {
      setScore((prev) => prev + randomNumber);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };


  return (
<main className='text-center m-auto'>
   
    <div className='flex justify-between'>
        <TotalScore score={score}/>
        <NumberSelector error={error}
              setError={setError}
              
              setSelectedNumber={ setSelectedNumber} selectedNumber={selectedNumber}/>
    </div>
    {selectedNumber}
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="space-y-4 mb-8">
        <button className={`bg-gray-50 text-gray-950 border-2 rounded-sm px-4   text-1xl `} onClick={resetScore}>Reset Score</button>
        <br/>
        <button className='bg-gray-950 text-white rounded-sm px-4 text-1xl mb-4' onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showRules && <Rules />}
</main>  )
}

export default GamePlay