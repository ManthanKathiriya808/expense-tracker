import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Form from './components/Form';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import Total from './components/Total';

function App() {
  // const [count, setCount] = useState(0)


  const [expense,setExpense] = useState("")
  const [amount,setAmount] = useState("")
  const [data,setData] = useState([])
  const id = uuidv4();


  function dele(id){
    const deleData = data.filter((ele) => ele.id != id)
    setData(deleData)
    // console.log(deleData)
  }

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

  return (



    <div className='mx-auto text-start py-10 max-w-[360px] '>

      <h1 className='text-3xl font-bold  mb-5'>Expense Tracker </h1>

   <Total data={data}/> 

    <IncomeExpense data={data}/>
     
     <History data={data} dele={dele} />

    <Form submit={submit} amount={amount} data={data} id={id} setData = {setData} setAmount={setAmount} expense={expense} setExpense={setExpense} />
     </div>
  )
}

export default App
