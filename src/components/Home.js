import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

const API = 'f4d02f14c0e5de98f5392e4d87dc5f9a';

const Home = () => {
    const [movie, setMovie] = useState()

    const getRandomMovie = async () => {

        const movie_id = [81356, 120168, 84958, 100757, 63174, 76669, 71446, 66732, 91557]
        const random_movie_id = movie_id[Math.floor(Math.random() * (movie_id.length - 1))]

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${random_movie_id}?api_key=${API}`)
        const data = await response.data


        // console.log(data)
        setMovie(data)
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    useEffect(() => {
        getRandomMovie()
    }, [])


    const image_style = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '550px',
        objectFit: 'contain',
    }
    return (
        <div style={image_style}>
            <div className="home-content">
                <h1>{movie?.name}</h1>
                <p>{truncate(movie?.overview, 200)}</p>
            </div>
        </div>
    );
};

export default Home;