import { MovieCardProps } from "../resources/entities/movie-list.entity";
import { onFavoriteHandler } from "../resources/movie-list.service";

function MovieCard({title, release_date, poster_path}: MovieCardProps) {
    return (
        <div className="movie-card">
            <div className="movie-card__poster">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <button className="favorite" onClick={onFavoriteHandler}>Favorite</button>
            </div>

            <div className="movie-card__info">
                <h3>{title}</h3>
                <p>{release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;