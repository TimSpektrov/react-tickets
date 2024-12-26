import React, {FC} from "react";
import styles from './button.module.scss'
import cn from 'classnames'
interface IButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  isActive?: boolean;
}
export const Button: FC<IButtonProps> = ({ text, onClick, disabled, isActive }) => {
  return(
    <button
      className={cn(styles.button, {
        [styles['disabled']]: disabled,
        [styles['active']]: isActive,

      })}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}