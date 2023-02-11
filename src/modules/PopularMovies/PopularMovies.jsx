import { useState, useEffect } from 'react';

import Loader from 'modules/Loader/Loader';
import PopularMovie from './PopularMovie/PopularMovie';
import { getMostPopular } from "shared/services/api";


const PopularMovies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                setLoading(true);
                const data = await getMostPopular();
                setMovies([ ...data.results]);
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();

    }, []);

    console.log(movies)

    return (
        <>
            {loading ? <Loader /> : <PopularMovie items={ movies } />}
        </>
    )
}

export default PopularMovies;