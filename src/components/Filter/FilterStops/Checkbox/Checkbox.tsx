import React, {FC} from "react";
import styles from './checkbox.module.scss'

interface ICheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onClick: (checked: boolean) => void;
  label: string;
  disabledCheckbox?: boolean;
  disabledButton?: boolean;
}
export const Checkbox: FC<ICheckboxProps> = ({ checked, onChange, onClick, label, disabledCheckbox, disabledButton }) => {
  const handleCheckboxChange = () => {
    if (!disabledCheckbox) {
      onChange(!checked);
    }
  };
  const handleButtonClick = () => {
    if (!disabledButton) {
      onClick(!checked);
    }
  };

  return(
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabledCheckbox}
        className={styles.input}
      />
      <div className={styles.label}>{label}</div>
      <button className={styles.button} disabled={disabledButton} type='button' onClick={handleButtonClick}>Только</button>
    </label>
  )
}