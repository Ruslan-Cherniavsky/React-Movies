import React, { Component } from "react";
import { useState } from "react";

function SelectRadio(props) {
    const { movieTypeFn } = props;
    // const initialState = ""
    //   const [selectetType, setSelectetType] = useState(initialState)

    function radioChange(value) {
        movieTypeFn(value.target.id);
    }

    return (
        <div className="radio">
            <form className="selectRadio" action="#">
                <p>
                    <label>
                        <input
                            name="group1"
                            id=""
                            type="radio"
                            onChange={radioChange}
                        />
                        <span>ALL</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="group1"
                            id="movie"
                            type="radio"
                            onChange={radioChange}
                        />
                        <span>Movie</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="group1"
                            id="series"
                            type="radio"
                            onChange={radioChange}
                        />
                        <span>Series</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="group1"
                            id="game"
                            type="radio"
                            onChange={radioChange}
                        />
                        <span>Game</span>
                    </label>
                </p>
            </form>
        </div>
    );
}

export default SelectRadio;
