import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieSearch from "../components/MovieSearch";
import { usePopularMovies } from "../resources/movie-list.service";
import { MovieCardProps } from "../resources/entities/movie-list.entity";

function MovieList() {
    const { data, loading, error } = usePopularMovies();
    const [movies, setMovies] = useState<MovieCardProps[]>([]);

    useEffect(() => {
        if (data) setMovies(data.results);
    }, [data]);
    
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
  
    return (
        <>
            <MovieSearch 
                onSearch={setMovies}/>

            {movies.map((movie: MovieCardProps) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    poster_path={movie.poster_path} />
            ))}
        </> 
    )
}

export default MovieList;

