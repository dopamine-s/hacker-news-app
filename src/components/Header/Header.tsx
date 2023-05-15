import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Theme from '../Theme';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Theme />
      <h1>
        <Link to="/">Hacker News</Link>
      </h1>
    </header>
  );
};

export default Header;
