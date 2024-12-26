import React, {FC} from "react";
import {TCurrency} from "../../../types/ticket.ts";
import {IFilterButton} from "../../../types/filter.ts";
import {Text} from "../../UI/Text";
import styles from '../filter.module.scss'
import {Button} from "./Button";

export interface IFilterCurrencyProps {
  buttons: IFilterButton[],
  currency: TCurrency;
  onClick: (value: TCurrency) => void;
}

export const FilterCurrency: FC<IFilterCurrencyProps> = ({ buttons, currency,onClick }) => {
  return(
    <div className={styles.container}>
      <Text size={20} As={'h3'} weight={'medium'} color={'grey-dark'}>
        ВАЛЮТА
      </Text>

      <div className={styles.buttons}>
        {buttons.map(item => (
          <Button text={item.text} isActive={item.id === currency} key={item.id} onClick={() =>onClick(item.id)} />
        ))}
      </div>
    </div>
  )
}