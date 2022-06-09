import React, { useEffect } from 'react'
import { useState } from 'react'
import { getMovies } from '../../api'
import './row.css'
// rfce
const imageHost = "https://image.tmdb.org/t/p/original/"
export function Row({title, path, isLarge}) {
    const [movies,setMovies] = useState([])
    const fetchMovies = async(_path)=>{
        try{
            const data = await getMovies(_path);
            console.log("data", data);
            setMovies(data?.results);
        }   catch (error) {
            console.log("erro no fetchMovies ", error);
        }
    };
    useEffect(()=> {
        fetchMovies(path);
    }, [path])

    return (
        <div className='row-container'>
            <h2 className='header'>{title}</h2>
            <div className='row-cards'>       
            {movies?.map((movie)=>{
                return(
                    <img className={`movie-image ${isLarge && "movie-image-large"}`}
                    key={movie.id}
                    src={`${imageHost}${movie.poster_path}`}
                    alt={movie.name}
                    />
                )
            })}
            </div>
    </div>
    );
}

export default Row
