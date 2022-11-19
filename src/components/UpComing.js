import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllMoviesData from './AllMoviesData';
import './HomePage.css';
import Home from './Home';
import { useData } from '../context_reducer/Context';
import { Link } from 'react-router-dom';


const UpComing = () => {
    const [upcomingmovie, setUpComingMovie] = useState([])

    const { setData } = useData()

    const getOriginalMovie = async () => {
        const response = await axios.get(AllMoviesData.upcoming)
        const result = await response.data.results

        // console.log(data)
        setUpComingMovie(result)
    }

    useEffect(() => {
        getOriginalMovie()
    }, [])

    return (
        <>
            <Home />
            <div className="homepage-div">
                <h2>UPCOMING SERIES</h2>
                <div className="movie-data-div">
                    {
                        upcomingmovie.map((item) => <Link to="/movie-detail" key={item.id}> <img onClick={() => setData(item)} src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="not found" className="original-img" /> </Link>)
                    }

                </div>
            </div>
        </>
    );
};

export default UpComing;
