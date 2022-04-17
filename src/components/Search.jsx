import React from "react";
import { useState } from "react";
import SelectRadio from "./SelectRadio";

function Search(props) {
    const initialState = "";
    const [search, setSearch] = useState(initialState);

    function inputText(value) {
        setSearch(value.target.value);
        // console.log(search)
    }

    function handleKey(event) {
        if (event.key === "Enter") {
            movieSearch(search);
        }
        return;
    }
    const { movieSearch, movieType } = props;
    return (
        <div>
            <div class="row">
                <div className="col s10">
                    <div className="input-field">
                        <input
                            id="search"
                            type="search"
                            className="validate"
                            placeholder="Search"
                            value={search}
                            onChange={inputText}
                            onKeyDown={handleKey}
                        />
                    </div>
                </div>

                <a
                    className="button col s2 waves-effect waves-light btn-small purple lighten-1"
                    onClick={() => movieSearch(search)}
                >
                    Search
                </a>
                <div></div>
            </div>
            <SelectRadio movieTypeFn={movieType} />
        </div>
    );
}

export default Search;
