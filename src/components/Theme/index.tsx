import { useEffect, FC } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { RootState } from '../../types/state';
import classnames from 'classnames';

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
  const themeClassnames = classnames(
    classes.root,
    theme === 'dark' ? classes.dark : classes.light
  );

  return (
    <div
      className={themeClassnames}
      onClick={handleChange}
      aria-label="Theme switcher"
    >
      {theme === 'dark' ? '★ To Light theme' : '★ To Dark theme'}
    </div>
  );
};

export default Theme;
