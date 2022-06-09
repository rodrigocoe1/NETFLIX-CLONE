const API_KEY = "b5821529d901d8d87be6105d01abb6b8";
export const categories =[
    {
        name: "trending",
        title: "Em Alta",
        path: `trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: true,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        name: "romances",
        title: "Romanticos",
        path: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false,
    },
    {
        name: "documentaries",
        title: "Documentários ",
        path: `discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    },
];

export const getMovies = async (path) =>{
    try {
        let url=`https:/api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();
    }catch(error){
        console.log("erro no meu getMovies (API.JSX): ",error);
    }
}