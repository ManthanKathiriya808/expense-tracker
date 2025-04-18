import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  const [expense,setExpense] = useState("")
  const [amount,setAmount] = useState("")
  const [data,setData] = useState([])

 
  function submit(){
    
    console.log(expense ,amount , "done")
// setData(data)
    let newData = [
      {
        expense:expense,
        amount:amount
      }
    ]
    setData((prev)=> [...prev,newData])

    console.log(data)


  
  setAmount("")
  setExpense("")
 }

  return (



    <div className='mx-auto text-start max-w-[360px]'>

<div className='my-5'>
      
<h3 className='text-xl font-bold'>History</h3>
    <br />
    <hr />
    <div className='flex flex-col gap-2 mt-1'>
        {
          data.map((ele,index)=> (<div key={index} className='flex border  justify-between'>
            <h2 className='bg-orange-500 '>{ele.expense}</h2>
          </div>))
        }
    </div>
</div>
     

       <div className='mt-5'>
       <form action="" 
        onSubmit={(e)=> 
          {  e.preventDefault();
            submit()}
      
          } className=''>
          <h3 className='text-xl font-bold'>Add New Transactions</h3>

          <br />
          <hr />
<div className='mt-5 flex flex-col'>
<label htmlFor="" className='text-lg'>Text </label>

<input type="text" onChange={(e)=> setExpense(e.target.value) } value={expense} className='shadow rounded-lg px-3 mt-2 shadow-slate-500 py-2 flex-grow ' />
</div>
<div className='mt-5 flex flex-col'>
<label htmlFor="" className='text-lg'>Amount </label>
<label htmlFor="" className='text-sm text-slate-500'>(negative - expense, positive - income)</label>

<input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className='shadow mt-2 rounded-lg px-3 shadow-slate-500 py-2 flex-grow ' />

<button type="submit" className="mt-6 text-white flex-grow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add transaction</button>

</div>
        </form>
       </div>
     </div>
  )
}

export default App
