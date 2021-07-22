import React, {useState} from 'react'


const Clock = () => {
    let dates = new Date().toLocaleTimeString()
   

    const [setdate,updateDate] = useState(dates)
    // setInterval(()=>{ let dates = new Date().toLocaleTimeString() },1000);
    const update = () =>{
        let dates = new Date().toLocaleTimeString();
        updateDate(dates);

    }

    setInterval(update,1000);

    return (
        <div>
            <h1>Clock</h1>
            <h2>{setdate}</h2>
        </div>
    )
}

export default Clock
