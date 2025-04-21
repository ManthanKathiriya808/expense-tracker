import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Form from './components/Form';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import Total from './components/Total';
import { PieChart } from 'react-minimal-pie-chart';

function App() {
  // const [count, setCount] = useState(0)


  const [expense,setExpense] = useState("")
  const [amount,setAmount] = useState("")
  const [data,setData] = useState([])
  const id = uuidv4();


  function dele(id){
    const deleData = data.filter((ele) => ele.id != id)
    setLocal(deleData)
    // console.log(deleData)

  }

  function setLocal(d){
    localStorage.setItem("data", JSON.stringify(d));
    getLocal()
  }


  function getLocal(){
   let local =  JSON.parse(localStorage.getItem("data")) || [];
   setData(local)
  }

  useEffect(()=> {
    getLocal()
  }, [])

  function submit(){
    
    // console.log(expense ,amount , "done")
// setData(data)


    let newData = 
      {
        expense:expense,
        amount:amount,
        id:id
    
      }

      
      data.push(newData)

      setLocal(data)
    
      // setData((prev)=> [...prev,newData])

      // setData([...data, newData])

    console.log(data)


  setAmount("")
  setExpense("")
 }


      let profit =(( Number(data.reduce((total,item) => item.amount >=0 ? total+ item.amount : total ,0).toFixed(0)) / Number( data.reduce((total,item) => total + item.amount,0).toFixed() ))* 100)
      console.log(profit)

      let loss =( Number(data.reduce((total,item) => item.amount <0 ? total+ item.amount : total ,0).toFixed(0)) / Number(data.reduce((total,item) => total + item.amount,0).toFixed(0)) )* 100
      console.log(loss)
  return (



    <div className='mx-auto text-start py-10  max-w-[360px] '>

      <h1 className='text-3xl font-bold  mb-5'>Expense Tracker </h1>

   <Total data={data}/> 

    <IncomeExpense data={data}/>
     
     <History data={data} dele={dele} />

   
            
    {  data.length >0? 
     <PieChart
     className='text-[5px]'
  
     label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}   
     totalValue={100}
    data={[
      { title: 'Income', value:profit, color: '#E38627'  },
      { title: 'Expence', value: loss, color: '#C13637'  },
    ]}
/> 

: ""}

    <Form submit={submit} amount={amount} data={data} id={id} setData = {setData} setAmount={setAmount} expense={expense} setExpense={setExpense} />
     </div>
  )
}

export default App
