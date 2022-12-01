import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import '../styles/Details.css'





const Details = () => {
    const [movieDetail, setMovieDetail] = useState([])
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')
    const [genres, setGenres] = useState('')
    const [openForm, setOpenForm] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()




    const getData = async () => {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        const movieData = await response.data
        const img = movieData.image.original
        const rating = movieData.rating.average

        const genres = movieData.genres[0]

        setMovieDetail(movieData)
        setImage(img)
        setRating(rating)
        setGenres(genres)
    }

    useEffect(() => {

        getData()
    }, [])


    const handleForm = (e) => {
        e.preventDefault()
        setOpenForm(!openForm)
    }

    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <div className='details_Container'>
            <div className="movie_details">
                <div className="name">
                    <h1>{movieDetail.name}</h1>
                </div>
                <div className="details">
                    {movieDetail.averageRuntime ? <span>{movieDetail.averageRuntime} min, </span> : ''}
                    {movieDetail.genres && (movieDetail.genres != null) ? <span>{genres}, </span> : ''}
                    {movieDetail.language ? <span>{movieDetail.language}</span> : ''}
                    {rating ? <div className='summary'>{'rating : ' + rating}</div> : ''}
                    {movieDetail.summary ? <div className='summary'>{movieDetail.summary}</div> : ''}
                </div>
                <div className='btnsContainer'>
                    <button onClick={handleForm} type="button" className="btn btn-primary booking_button">Book Ticket</button>
                    <button onClick={handleBack} type="button" className="btn btn-info backBtn">Back</button>

                </div>
            </div>
            <img src={image} alt="" className='image' />
            {openForm ? <Form state={openForm} set={setOpenForm} movieName={movieDetail.name} genres={genres} time={movieDetail.schedule.time} language={movieDetail.language} /> : ''}
        </div>
    )
}

export default Details
