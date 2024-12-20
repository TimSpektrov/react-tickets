import {FC, useEffect, useState} from "react";
import styles from './filter.module.scss'
import {useTicket} from "../../hooks/useTickets.tsx";
import {IFilterButton, IFilterCheckbox} from "../../types/filter.ts";
import {STOPS_ALL, TCurrency, TTransferStops} from "../../types/ticket.ts";
import {FilterCurrency} from "./FilterCurrency";
import {FilterStops} from "./FilterStops";
import cn from "classnames";

const buttonGroup: IFilterButton[] = [
  {
    text: 'RUB',
    id: 'rub',
  },
  {
    text: 'USD',
    id: 'usd',
  },
  {
    text: 'EUR',
    id: 'eur',
  },
]

const checkboxGroup: IFilterCheckbox[] = [
  {
    text: 'Все',
    id: STOPS_ALL,
    only: true
  },
  {
    text: 'Без пересадок',
    id: 0,
  },
  {
    text: '1 пересадка',
    id: 1,
  },
  {
    text: '2 пересадки',
    id: 2,
  },
  {
    text: '3 пересадки',
    id: 3,
  },
]
export const Filter: FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);
  const [_, setLastScrollY] = useState<number>(0);
  const {currency, setNewCurrency, transferStops, setNewTransferStops} = useTicket()
  const handleClickCurrency = (value: TCurrency) => {
    setNewCurrency(value)
  }

  const handleChangeStops = (value: TTransferStops, only: boolean | undefined) => {
    console.log(value, only)
      setNewTransferStops(value, only)
  }
  const handleClickStops = (value: TTransferStops) => {
      setNewTransferStops(value, true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(prevLastScrollY => {
        if (currentScrollY > prevLastScrollY) {
          setIsFilterVisible(false); // Скролл вниз
        } else {
          setIsFilterVisible(true); // Скролл вверх
        }
        return currentScrollY; // Возвращаем новое значение для lastScrollY
      });
        setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div className={cn(styles.filter, {[styles.open]: isFilterVisible})}>
      <FilterCurrency buttons={buttonGroup} currency={currency} onClick={handleClickCurrency} />
      <FilterStops checkboxes={checkboxGroup} transferStops={transferStops} onChange={handleChangeStops} onClick={handleClickStops}/>
    </div>
  )
}