import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'shared/services/api';
import Loader from 'modules/Loader/Loader';

export const ReviewsInformation = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  console.log(reviews);
  return (
    <>
      {loading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
