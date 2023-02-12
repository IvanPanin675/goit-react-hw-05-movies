import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'shared/services/api';
import Loader from 'modules/Loader/Loader';

export const ReviewsInformation = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviews(id);
        if (data.results === reviews) {
          setReviews([]);
        }
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const rews = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      <ul>
        {rews.length === 0 ? "We don't have any reviews for this movie" : rews}
      </ul>
    </>
  );
};
