import React, { useEffect, useState } from 'react';
import './HomePage.css';
import axios from 'axios';
import AllMoviesData from './AllMoviesData';
import { Link } from 'react-router-dom';
import Home from './Home';
import { useData } from '../context_reducer/Context';

const HomePage = () => {
    const [originalMovie, setOriginalMovie] = useState([])

    const { setData } = useData()


    const getOriginalMovie = async () => {
        const response = await axios.get(AllMoviesData.original)
        const result = await response.data.results

        // console.log(data)
        setOriginalMovie(result)
    }

    useEffect(() => {
        getOriginalMovie()
    }, [])
    return (
        <>
            <Home />
            <div className="homepage-div">
                <h2>NETFLIX ORIGINAL SERIES</h2>
                <div className="movie-data-div">
                    {
                        originalMovie.map((item) => <Link to="/movie-detail" key={item.id}> <img onClick={() => setData(item)} src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="not found" className="original-img" /> </Link>)
                    }

                </div>
            </div>
        </>
    );
};

export default HomePage;
