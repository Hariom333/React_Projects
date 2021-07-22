import React , {useEffect , useState} from 'react'

const Covid = () => {

   const [data, setData]  = useState([]);

   const getCovidData = async () => {

    try{

        const res = await fetch('https://api.covid19india.org/data.json');
         const actualData = await res.json();
       
         setData(actualData.statewise[0]);
         console.log(actualData.statewise[0]);
       
        }catch(err){
             console.log(err);
    }


   }

    useEffect(() => {
        getCovidData();

    }, [])

    return (
        <div>
            <h1>Live</h1>
            <h2>Covid - 19 Coronavirus Tracker</h2>
     
     <ul>
         <li> {data.active}</li>
         <li> {data.recovered}</li>
         <li> {data.deaths}</li>
         
     </ul>

        </div>
    )
}

export default Covid
