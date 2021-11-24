import React from 'react';
import { actors } from '../data';


const actorList =()=>{
  
  return actors.map((a)=>{
     return(
     <div>
        {a.name}
        <ul>
         {a.movies.map((movie)=>{
           return(
            <li>{movie}</li>
           )
         })}
         </ul>
     </div>
     )
   })
 
 }

const Actors = () => {
  return (
    <div>
       <h1>Actors Page</h1>
       {actorList()}
    </div>
  );
};

export default Actors;
