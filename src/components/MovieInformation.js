import React, { useState } from 'react';
import { useData } from '../context_reducer/Context';
import './MovieInformation.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const MovieInformation = () => {
    const [letPlay, setLetPlay] = useState()
    const { data } = useData()

    const playVideo = (movie) => {
        if (letPlay) {
            setLetPlay("")

        } else {
            // console.log(movie)
            movieTrailer(movie)
                .then((url) => {
                    const urlParam = new URLSearchParams(new URL(url).search)
                    setLetPlay(urlParam.get('v'))

                }).catch(() => alert("Sorry: Trailor is not Available"))
        }
    }

    return (
        <>
            {
                Object.keys(data).length > 0 ?
                    <div className="movie-info-div">
                        <h1>Info</h1>
                        <div className="img-movie-info">
                            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="not found" className="movie-img" />

                            <div className="movie-info">
                                <h2>Title: {data.name || data.original_name || data.title || data.original_title}</h2>
                                <p>{data.overview}</p>
                                <h4>Rating : <span className="span">{data.vote_average} / 10 </span> </h4>
                                <h4>Total Vote : <span className="span">{data.vote_count}</span> </h4>
                                <h4>Language : <span className="span">{data.original_language}</span> </h4>
                                <h4>Release Date : <span className="span">{data.release_date || "Not Available"}</span> </h4>
                                {letPlay && <YouTube videoId={letPlay} className="video-play" />}
                                <button onClick={() => playVideo(data.name || data.original_name || data.title || data.original_title)}>{letPlay ? "Close Trailer" : "Watch Trailer"}</button>
                            </div>
                        </div>


                    </div> : null
            }
        </>
    );
};

export default MovieInformation;