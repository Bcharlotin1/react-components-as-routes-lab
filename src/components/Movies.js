import React from 'react';
import { movies } from '../data';

const movieList = () =>{
  console.log(movies)

 return movies.map((m)=>{
    return(
    <div>
       {m.title}
       {m.time}
       <ul>
        {m.genres.map((genre)=>{
          return(
           <li>{genre}</li>
          )
        })}
        </ul>
    </div>
    )
  })

}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
       {movieList()}
    </div>
  );
};

export default Movies;
