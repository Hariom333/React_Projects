import React,{useState, useEffect} from 'react'; //hooks
import './App.css';

function App() {
  // create fnct

  const [currentSum,setCurrentSum]=useState(0);
  const [currentSum1,setCurrentSum1]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })


useEffect(()=>{
  document.querySelector('#fname').value=" ";
})

useEffect(()=>{
  document.querySelector('#lname').value=" ";
})


  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

const mult = (e) => {
e.preventDefault();
let currentNum1 = document.querySelector('#fname').value
let currentNum2 = document.querySelector('#fname').value
let mult = currentNum2 * currentNum1;
 setCurrentSum1(mult);

}


  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentSum}  readOnly />   
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
       <br /> <br />
       <input type="text" id="fname" /><br />
       <input type="text" id="lname" /><br />
      <button onClick = {mult}>*</button>
      <input type="text" id="result" value = {currentSum1 }/><br />
      
      </form>
    </div>
  );
}

export default App;

