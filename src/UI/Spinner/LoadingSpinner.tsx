import { FC } from 'react';
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner: FC = () => {
  return <div className={classes.spinner}></div>;
};

export default LoadingSpinner;
