import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMoviesData from './AllMoviesData';
import './HomePage.css';
import Home from './Home';
import { useData } from '../context_reducer/Context';
import { Link } from 'react-router-dom';


const Trending = () => {
    const [trendingMovie, setTrendingMovie] = useState([])

    const { setData } = useData()

    const getOriginalMovie = async () => {
        const response = await axios.get(AllMoviesData.trending)
        const result = await response.data.results

        // console.log(response)
        setTrendingMovie(result)
    }

    useEffect(() => {
        getOriginalMovie()
    }, [])

    return (
        <>
            <Home />
            <div className="homepage-div">
                <h2>TRENDING SERIES</h2>
                <div className="movie-data-div">
                    {
                        trendingMovie.map((item) => <Link to="/movie-detail" key={item.id} ><img onClick={() => setData(item)} src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="not found" className="original-img" /> </Link>)
                    }

                </div>
            </div>
        </>
    );
};

export default Trending;
