import React, {useState} from 'react'
import List from './List'
import data from './data'
function App() {
   
  const [setVal, updateVal] = useState(data);
 
  // console.log({setVal});
  return ( 
    <div>
     
      <h3>{data.length} birthday to day</h3>
     
       <List people = {setVal}/>  
       <button onClick = {()=> updateVal([]) }>Clear all</button>     
    </div>
  )
}


export default App
