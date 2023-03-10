import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../UI/Card/Card';
import { getTimeAgo } from '../../../utils/utils';
import classes from './SingleNews.module.scss';

interface SingleNewsProps {
  id: number;
  title: string;
  score: number;
  by: string;
  time: number;
  type: string;
  number: number;
}

const SingleNews: FC<SingleNewsProps> = ({
  id,
  title,
  score,
  by,
  time,
  type,
  number,
}) => {
  const navigate = useNavigate();

  const showNewsDetailsHandler = (): void => {
    navigate(`/news/${id}`);
  };

  const calculateTime = getTimeAgo(time);

  if (type !== 'story') {
    return <></>;
  }

  return (
    <Card className={classes['single-news']}>
      <li>
        <article className={classes.article} onClick={showNewsDetailsHandler}>
          <h4>
            <span>{number}. </span>
            {title}
          </h4>
          <div className={classes.wrapper}>
            <p>
              {score} {score === 1 ? 'Point' : 'Points'}
            </p>
            <p>{calculateTime}</p>
            <p className={classes.author}>
              By: <span>{by}</span>
            </p>
          </div>
        </article>
      </li>
    </Card>
  );
};

export default SingleNews;
