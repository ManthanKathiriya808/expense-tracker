import React from 'react'

const IncomeExpense = ({data}) => {
  return (
    <div>
            <div className='my-5 flex justify-evenly shadow px-2 py-6 bg-white rounded-xl text-center '>
          <div className=' flex-grow border-r'>
        <h2 className='text-xl font-bold'>Income</h2>
        <h2 className='text-2xl font-mono text-green-400'>{data.reduce((total,item) => item.amount >0 ? total+ item.amount : total ,0).toFixed(2)}</h2>
          </div>
          <div className=' flex-grow'>
        <h2 className='text-xl font-bold'>Expense</h2>
        <h2 className='text-2xl  font-mono text-red-400'>{data.reduce((total,item ) => item.amount < 0 ? total+ item.amount : total,0).toFixed(2)}</h2>
          </div>
      </div>
    </div>
  )
}

export default IncomeExpense
