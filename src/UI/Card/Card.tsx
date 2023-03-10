import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import classes from './Card.module.scss';

interface CardProps {
  className?: string;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className }) => {
  const cardClasses = classnames(classes.card, className);

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
