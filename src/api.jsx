const API_KEY = "b5821529d901d8d87be6105d01abb6b8";
export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: `trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Da Netflix",
        path: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "comedy",
        title: "Comedias",
        path: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "romances",
        title: "Romances",
        path: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        name: "documentaries",
        title: "Documentarios",
        path: `trending/all/week?api_key=${API_KEY}&with_genres=99`,
    },
    

]
export const getMovies = async (path)=>{
    try{
        let url = `https://api.themoviedb.org/3/&{path}`;
        const response = awaitfetch(url);
        return await response.json();
    
    }catch(error){
        console.log("erro no meu getMovies (API.JSK): ",error);
    }
}