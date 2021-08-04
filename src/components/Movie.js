import React from 'react';
import { Link } from 'react-router-dom';
import propsTypes from 'prop-types';
import "./Movie.css";

function Movie ({id, year, title, summary, poster , genres}) {
    return (
        <Link to={{
            pathname:`/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                        {genre}
                        </li>
                    ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );
}



Movie.propsTypes = {
    id: propsTypes.number.isRequired,
    title: propsTypes.string.isRequired,
    summary: propsTypes.string.isRequired,
    poster: propsTypes.string.isRequired,
    year: propsTypes.number.isRequired,
    genres: propsTypes.arrayOf(propsTypes.string).isRequired,
};

export default Movie;