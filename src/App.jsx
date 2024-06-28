
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
 
const[principle,setPrinciple]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[interest,setInterest]=useState(0)
const[IsPrinciple,setIsPrinciple]=useState(true)
const[IsRate,setIsRate]=useState(true)
const[IsYear,setIsYear]=useState(true)

const validate=(e)=>{
  const name=e.target.name
  const value=e.target.value
  // console.log(name,value);
  // console.log(!!value.match(/^[0-9]*$/));

  if(!!value.match(/^[0-9]*$/)){
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name=='principle'){
      setIsPrinciple(false)
      setPrinciple(value)
    }
    else if(name=='rate'){
      setIsRate(false)
      setRate(value)
    }
    else{
      setIsYear(false)
      setYear(value)
    }
  }
  
}

const handlereset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
}

const calculate=(e)=>{
  e.preventDefault()
  if(principle==""||rate==""||year==""){
    alert('Please fill the form completely')
  }
  else{
    setInterest((principle*rate*year)/100)
   
  }
}
  return (
    <>
    <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor:'white',width:'500px'}} className='p-5 rounded'>
          <h1 className='text-center'>Simple Interest App</h1>
          <p className='text-center'>Calculate your simple interest easily</p>
          <div style={{height:'150px', backgroundColor:'#13B3F4 '}} className='p-3 mt-5 shadow rounded d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold'>₹ {interest}</h1>
            <p>Total Simple Interest</p>

           
          </div>
          <form className='mt-4' onSubmit={calculate}>
              <div className="mb-3">
              <TextField id="outlined-basic" label="₹ Principle Amount" value={principle||""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='principle' />
                {!IsPrinciple &&
                  <p className='text-danger fw-bold'>*Invalid Input</p>
                  }
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" label="Rate of Interest(p.a)%" value={rate||""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='rate' />
              {!IsRate &&
                  <p className='text-danger fw-bold'>*Invalid Input</p>
                  }
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" label="Year(Yr)" value={year||""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='year'/>
              {!IsYear &&
                  <p className='text-danger fw-bold'>*Invalid Input</p>
                  }
              </div>

              <div className='mb-3 d-flex justify-content-between'>
                <Button variant="contained" color="success" type='submit' style={{width:"180px",padding:"15px"}}disabled={IsPrinciple && IsRate &&IsYear?false:true}>Calculate</Button>
                <Button variant="outlined" color="warning" style={{width:"180px",padding:"15px"}} onClick={handlereset}>Reset</Button>
              </div>
             
            </form>
      </div>
    </div>
    </>
  )
}

export default App
