import classnames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  className,
}) => {
  const buttonClasses = classnames(classes.button, className);

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
