import React from 'react'

const Total = ({data}) => {
  return (
    <div>
         <div>
        <h2 className='text-xl font-medium'>Your Balance</h2>
        {/* total summm */}


        <h2 className='text-4xl font-mono font-bold '>
        ${data.reduce((a,v) => a = a + v.amount,0 ).toFixed(2)}


        </h2>


      </div>
    </div>
  )
}

export default Total
