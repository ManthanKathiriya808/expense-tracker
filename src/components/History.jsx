import React from 'react'

const History = ({data ,dele}) => {


  return (
    <div>
      <div className='my-5'>
      
      <h3 className='text-xl font-bold'>History</h3>
          <br />
          <hr />
          <div className='flex flex-col gap-2 mt-3'>
              {
                data.map((ele)=> (
                <div key={ele.id} className=" flex  shadow px-3 py-2 rounded-xl  shadow-slate-600  justify-between bg-white">
                  <h2 className=''>{ele.expense}</h2>
                  <div className='flex gap-3'> 
                    <h2 className={ele.amount < 0 ? "text-red-500 font-mono" : "text-green-500  font-mono"}>${ele.amount}</h2>
                    <button type='button' onClick={()=> dele(ele.id)}>❌</button>
                    
                  </div>
                </div>))
              }
          </div>
      </div>
    </div>
  )
}

export default History
