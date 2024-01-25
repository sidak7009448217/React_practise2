import React from 'react'

function Food({foods}) {
  return (
    <>
    <h1>Food List</h1>
    <ul className='w-[80%] mx-auto'>
      {foods.map((food) => (
        
          <li key={food} className='w-1/3 p-4 text-center text-gray-400'>{food}</li>
      ))}
    </ul>
    </>
  )
}

export default Food