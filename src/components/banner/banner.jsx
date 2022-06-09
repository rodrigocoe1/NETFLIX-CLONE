import React, { useEffect } from "react";
import categories, { getMovies } from "../api";
import "./banner.css";

function banner() {
    const [movie, setMovies] = React.useState({});

    const fetchRandomMovies = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length)
            setMovies(movies[randomIndex]);
        }   catch (error) {
            console.log("banner fetchRandomMovies error: ", error)
        }
    };

    useEffect(() => {
        fetchRandomMovies();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str; 
    }
}

export default banner