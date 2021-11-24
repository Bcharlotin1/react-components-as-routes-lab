import React from 'react';
import { directors } from '../data';

const dirList =()=>{
  
   return directors.map((d)=>{
      return(
      <div>
         {d.name}
         <ul>
          {d.movies.map((movie)=>{
            return(
             <li>{movie}</li>
            )
          })}
          </ul>
      </div>
      )
    })
  
  }

const Directors = () => {
  return (
    <div>
       <h1>Directors Page</h1>
       {dirList()}
    </div>
  );
}

export default Directors
