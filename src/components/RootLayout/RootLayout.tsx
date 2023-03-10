import { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import classes from './RootLayout.module.scss';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default RootLayout;
