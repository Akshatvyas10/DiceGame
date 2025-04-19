
import React from 'react'
interface totalscore{
    score:number

}
const TotalScore:React.FC<totalscore> = ( props) => {
  return (
    <div className='text-center inline-block m-8'>
    <h1 className={`text-7xl font-bold ${props.score<=-1 && 'text-red-700'} ${props.score>=1 && 'text-green-500'}`}>{props.score}</h1>
    <p className='font-semibold'>Totel Score</p>
</div>
  );
};

export default TotalScore;

