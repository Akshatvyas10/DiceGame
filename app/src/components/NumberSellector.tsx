import React, { useEffect } from 'react';

interface SetNumberProps {
  setError: React.Dispatch<React.SetStateAction<string>>; 
  error: string; 
  selectedNumber: number;
  setSelectedNumber: React.Dispatch<React.SetStateAction<number>>; 
}

const NumberSelector: React.FC<SetNumberProps> = (props) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value:number) => {
    props.setSelectedNumber(value);
    props.setError("");
  };
 
  useEffect(() => {
    console.log(props.selectedNumber);
  }, [props.selectedNumber]);

  return (
    <div>
         <p className="text-red-600 border-2 inline-block rounded px-2 mt-5">{props.error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
            <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`cursor-pointer p-1 hover:bg-black mr-4 mt-4 hover:text-white border border-gray-900 w-16 h-16 items-center justify-center rounded flex
            ${props.selectedNumber === value ? 'bg-gray-500 text-white' : 'bg-white'}
            `}
          >
            {value}
            </div>
        ))}
      </div>
        <p className="text-2xl font-bold  inline-block rounded px-2 mt-5">Select Number</p>

    
    </div>
  );
};

export default NumberSelector;
