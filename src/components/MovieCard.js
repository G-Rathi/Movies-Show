import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MovieCard.css'




const MovieCard = ({ movieShow }) => {

    const mediumImage = movieShow.image.medium

    return (
        <div className="card_container" >
            <Link to={`/watch/${movieShow.id}`} >
                <img src={mediumImage} className='movieimage' />
                <div className="cardInfo">
                    <div className="name">
                        {movieShow.name}
                    </div>
                    <div className="card_details">
                        {movieShow.averageRuntime ? <span>{movieShow.averageRuntime} min, </span> : ''}
                        {movieShow.genres && (movieShow.genres != null) ? <span>{movieShow.genres[0]}, </span> : ''}
                        {movieShow.language ? <span>{movieShow.language}</span> : ''}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard

