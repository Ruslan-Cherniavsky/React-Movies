import React from "react";

function Movie(props) {
    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.Poster} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {props.Title}
                </span>
                <p>
                    {props.Year} <span className="right">{props.Type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
