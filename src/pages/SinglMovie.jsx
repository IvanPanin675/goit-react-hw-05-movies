import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getIdMovie, getIdMovieImage } from 'shared/services/api';
import Loader from 'modules/Loader/Loader';

export const SinglMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [image, setImage] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setLoading(true);
        const data = await getIdMovie(id);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieId();
  }, []);

  useEffect(() => {
    const fetchMovieIdImage = async () => {
      try {
        setLoading(true);
        const data = await getIdMovieImage(id);
        console.log('IMAGE ----- ', data);
        setImage(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieIdImage();
  }, []);

  console.log(movie);

  return (
    <>
      {loading && <Loader />}
      <div>
        <img src={'https://www.shutterstock.com/image-illustration/illustration-international-passengers-infrared-thermal-600w-1640970700.jpg'} alt=""></img>
      </div>
    </>
  );
};
