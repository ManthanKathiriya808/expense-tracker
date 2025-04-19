import React from 'react'



function Form({expense,amount,setAmount,setExpense,submit}) {

     

  return (
    <div>
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

<input type="text" onChange={(e)=> setExpense(e.target.value) } value={expense} className='shadow bg-white rounded-lg px-3 mt-2 shadow-slate-500 py-2 flex-grow ' />
</div>
<div className='mt-5 flex flex-col'>
<label htmlFor="" className='text-lg'>Amount </label>
<label htmlFor="" className='text-sm text-slate-500'>(negative - expense, positive - income)</label>

<input type="number" value={amount} required onChange={(e) => setAmount(Number(e.target.value))} className='shadow mt-2 rounded-lg px-3   bg-white shadow-slate-500 py-2 flex-grow ' />

<button type="submit" className="mt-6 text-white flex-grow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add transaction</button>

</div>
        </form>
       </div>
    </div>
  )
}

export default Form
