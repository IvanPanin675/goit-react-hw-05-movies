import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'shared/services/api';

export const CastInformation = () => {
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, []);
  console.log(cast);
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`}></img>
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};