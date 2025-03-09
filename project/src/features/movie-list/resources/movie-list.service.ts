
import { useFetch } from "../../../shared/hooks/fetch-data";
import { MovieCardProps } from "./entities/movie-list.entity";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;
const fetchURL = (path: string, params: Record<string, string> = {}) => {
    const query = new URLSearchParams(params).toString();
    return `${BASE_URL}/${path}?api_key=${API_KEY}&${query}`;
};


export const onFavoriteHandler = () => {
    alert("Favorite")
}

export const usePopularMovies = () => {
    return useFetch<{ results: MovieCardProps[] }>(fetchURL("movie/popular"));
};

export const searchMovies = async (query: string) => {
    const response = await fetch(fetchURL('search/movie', { query }));
    if (!response.ok) throw new Error("Erro ao buscar filmes");
    return response.json();
};