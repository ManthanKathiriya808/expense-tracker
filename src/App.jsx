import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  const [expense,setExpense] = useState("")
  const [amount,setAmount] = useState("")
  const [data,setData] = useState([])
  const id = uuidv4();

 
  function submit(){
    
    console.log(expense ,amount , "done")
// setData(data)
    let newData = 
      {
        expense:expense,
        amount:amount,
        id:id
        
      }
    
    setData((prev)=> [...prev,newData])

    console.log(data)


  
  setAmount("")
  setExpense("")
 }


function dele(id){
  const deleData = data.filter((ele) => ele.id != id)
  setData(deleData)
  // console.log(deleData)
}

  return (



    <div className='mx-auto text-start max-w-[360px] '>

      <h1 className='text-3xl font-bold mb-5'>Expense Tracker </h1>

      <div>
        <h2 className='text-xl font-medium'>Your Balance</h2>
        {/* total summm */}


        <h2 className='text-4xl font-mono font-bold '>
        ${data.reduce((a,v) => a = a + v.amount,0 ).toFixed(2)}


        </h2>


      </div>


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

export default App
