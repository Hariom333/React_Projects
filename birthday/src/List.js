import React  from 'react'


function List({people}) {
   
    return (
      
      
      <>
          
       {people.map((person)=>{
          const {id,name,age} = person;      

     return<div><p>{id} </p>   
      <p>{name} </p>   
      <p>{age} </p>   
      </div>  

      })}
      </>
    )
}

export default List
