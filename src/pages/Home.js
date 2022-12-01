import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { Routes, Route, HashRouter } from 'react-router-dom'
import '../styles/Home.css'
import Details from './Details'




const Home = () => {

    return (
        <HashRouter>
            <div className='main_Container'>
                <Routes>
                    <Route path='/' element={<Allmovies />} />
                    <Route path='/watch/:id' element={<Details />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default Home



export const Allmovies = () => {
    const [movies, setMovies] = useState([])

    const getData = async () => {
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        const moviesData = await response.data
        setMovies(moviesData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='allmoviesContainer'>
            {
                movies.map((movie, index) => {
                    return (
                        <MovieCard movieShow={movie.show} key={index} />
                    )
                })
            }
        </div>
    )
}

