import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
    return (
        <div className="movies">
            {props.moviesData.Search ? (
                props.moviesData.Search.map((movie) => (
                    <Movie
                        // movieName = {movie.Title}
                        // movieImg = {movie.Poster}
                        // movieYear = {movie.Year}
                        // movieType = {movie.Type}

                        key={movie.imdbID}
                        {...movie}
                    />
                ))
            ) : (
                <h4>NOT FOUND</h4>
            )}
        </div>
    );
}
export { Movies };
