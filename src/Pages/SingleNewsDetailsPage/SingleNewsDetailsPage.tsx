import { FC, useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import CommentsLayout from '../../components/SingleNewsWithComments/CommentsLayout';
import SingleNewsDetails from '../../components/SingleNewsWithComments/NewsDetails/SingleNewsDetails/SingleNewsDetails';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import LoadingSpinner from '../../UI/Spinner/LoadingSpinner';
import classes from './SingleNewsDetailsPage.module.scss';
import { SingleNewsInterface } from '../../types/singleNews';
import axios from 'axios';

const SingleNewsDetailsPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleNews, setSingleNews] = useState<SingleNewsInterface | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  const navigateToMainHandler = (): void => {
    navigate('/');
  };

  const fetchSingleNews = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      setSingleNews(response.data);
      setLoading(false);
      setPageLoaded(true);
    } catch (error) {
      console.error('Error fetching single news:', error);
      setError(
        'There was an error fetching the comments. Please try again later.'
      );
      setLoading(false);
      setPageLoaded(true);
    }
  }, [id]);

  useEffect(() => {
    fetchSingleNews();
  }, [fetchSingleNews]);

  if (!pageLoaded) {
    return <LoadingSpinner />;
  }

  if (!singleNews || singleNews.type !== 'story') {
    return <NotFoundPage />;
  }

  return (
    <section className={classes['single-news']}>
      <h2>Single News</h2>
      <Button
        onClick={navigateToMainHandler}
        className={classes['navigate-button']}
      >
        Back to fresh news
      </Button>
      <SingleNewsDetails
        url={singleNews.url}
        descendants={singleNews.descendants}
        title={singleNews.title}
        score={singleNews.score}
        by={singleNews.by}
      />
      <Button onClick={fetchSingleNews} className={classes['comments-button']}>
        Refresh <span>comments</span>
      </Button>
      {loading && <LoadingSpinner />}
      {!loading && error && <p className={classes.error}>{error}</p>}
      {!loading && !error && <CommentsLayout singleNews={singleNews} />}
    </section>
  );
};

export default SingleNewsDetailsPage;
