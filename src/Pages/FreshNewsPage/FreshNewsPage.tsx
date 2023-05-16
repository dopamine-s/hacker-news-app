import { FC, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from '../../components/NewsList/NewsList';
import Button from '../../UI/Button/Button';
import LoadingSpinner from '../../UI/Spinner/LoadingSpinner';
import classes from './FreshNewsPage.module.scss';
import { NumberedSingleNewsInterface } from '../../types/singleNews';

const FreshNewsPage: FC = () => {
  const [news, setNews] = useState<NumberedSingleNewsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(
        'https://hacker-news.firebaseio.com/v0/newstories.json'
      );
      const storyIds = response.data;
      const promises = storyIds.slice(0, 100).map((id: number, index: number) =>
        axios
          .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => ({
            number: index + 1,
            ...response.data,
          }))
      );
      const data = await Promise.all(promises);
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('There was an error fetching the news. Please try again later.');
      setNews([]);
      setLoading(false);
    }
  }, [setNews]);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(() => {
      fetchNews();
    }, 60000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  const handleRefreshClick = () => {
    fetchNews();
  };

  return (
    <section className={classes['news-list']}>
      <h2>List of News</h2>
      <Button className={classes.button} onClick={handleRefreshClick}>
        Refresh
      </Button>
      {loading && <LoadingSpinner />}
      {!loading && error && <p className={classes.error}>{error}</p>}
      {!loading && !error && news.length > 0 && <NewsList news={news} />}
      {!loading && !error && news.length === 0 && <p>No news available.</p>}
    </section>
  );
};

export default FreshNewsPage;
