import { FormEvent } from "react";
import { searchMovies } from "../resources/movie-list.service";
import { MovieCardProps } from "../resources/entities/movie-list.entity";

function MovieSearch({ onSearch }: { onSearch: (movies: MovieCardProps[]) => void }) {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get("searchQuery") as string;
        
        if (!query.trim()) return;
    
        try {
            const response = await searchMovies(query);
            if (response && response.results) {
                onSearch(response.results);
            } else {
                console.error("Formato inesperado:", response);
            }
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="movie-search">
            <input type="text" name="searchQuery" placeholder="Search movies" className="movie-search__input" />
            <button type="submit">Buscar</button>
        </form>
    );
}

export default MovieSearch;