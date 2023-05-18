import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  return (
    <section className={classes['not-found']}>
      <h2>404 Not found</h2>
      <Link to="/">Back to latest news</Link>
    </section>
  );
};

export default NotFoundPage;
