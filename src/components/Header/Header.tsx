import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Theme from '../Theme';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <h1>
        <Link to="/">Hacker News</Link>
      </h1>
      <Theme />
    </header>
  );
};

export default Header;
