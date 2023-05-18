import { useEffect, FC } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { RootState } from '../../types/state';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import { set } from '../../store/theme-slice';
import classes from './index.module.scss';

const Theme: FC = () => {
  const theme = useAppSelector((state: RootState) => state.theme.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => dispatch(set(theme === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className={classes.switch}
      onClick={handleChange}
      aria-label="Theme switcher"
    >
      <p className={classes.text}>
        <span className={classes.text}>Switch theme</span>
        <span className={classes.icon}>
          {theme === 'dark' ? (
            <Brightness7 sx={{ fontSize: '1.6rem' }} />
          ) : (
            <Brightness4 sx={{ fontSize: '1.6rem' }} />
          )}
        </span>
      </p>
    </div>
  );
};

export default Theme;
