import React from "react";
import { useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { useEffect } from "react";
import Search from "../components/Search";
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const initialState = null;
    const [moviesData, setMoviesData] = useState(initialState);
    const [movieInput, setMovieInput] = useState("matrix");
    const [movieType, setMovieType] = useState("");
    const [isLoading, setLoading] = useState(true);

    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

    function movieSearch(data) {
        setMovieInput(data.toLowerCase().replace(/\s+/g, ""));
        console.log(data);
    }

    function movieTypeFn(data) {
        setMovieType(data);
        console.log(data);
    }

    useEffect(async () => {
        try {
            setLoading(true);
            await fetch(`${URL}${movieInput}&type=${movieType}`)
                .then((response) => response.json())
                .then((data) => setLoad(data));
        } catch (err) {
            await console.log(moviesData);
        }
    }, [console.log(moviesData), movieInput, movieType]);

    function setLoad(data) {
        setMoviesData(data);
        setLoading(false);
    }

    return (
        <main className="container content">
            <Search movieSearch={movieSearch} movieType={movieTypeFn} />
            {isLoading ? <Preloader /> : <Movies moviesData={moviesData} />}
        </main>
    );
}

export { Main };
