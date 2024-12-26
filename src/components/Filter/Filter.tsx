import { FC, useEffect, useState } from "react";
import styles from "./filter.module.scss";
import { useTicket } from "../../hooks/useTickets.tsx";
import { IFilterButton, IFilterCheckbox } from "../../types/filter.ts";
import { STOPS_ALL, TCurrency, TTransferStops } from "../../types/ticket.ts";
import { FilterCurrency } from "./FilterCurrency";
import { FilterStops } from "./FilterStops";
import cn from "classnames";

const buttonGroup: IFilterButton[] = [
  {
    text: "RUB",
    id: "rub",
  },
  {
    text: "USD",
    id: "usd",
  },
  {
    text: "EUR",
    id: "eur",
  },
];

const checkboxGroup: IFilterCheckbox[] = [
  {
    text: "Все",
    id: STOPS_ALL,
    only: true,
  },
  {
    text: "Без пересадок",
    id: 0,
  },
  {
    text: "1 пересадка",
    id: 1,
  },
  {
    text: "2 пересадки",
    id: 2,
  },
  {
    text: "3 пересадки",
    id: 3,
  },
];
export const Filter: FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(true);
  const { currency, setNewCurrency, transferStops, setNewTransferStops } =
    useTicket();

  const handleClickCurrency = (value: TCurrency) => {
    setNewCurrency(value);
  };
  const handleChangeStops = (
    value: TTransferStops,
    only: boolean | undefined,
  ) => {
    setNewTransferStops(value, only);
  };
  const handleClickStops = (value: TTransferStops) => {
    setNewTransferStops(value, true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY) return;
      setLastScrollY((prevLastScrollY) => {
        setIsFilterVisible(currentScrollY < prevLastScrollY);
        return currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleFilterButtonClick = () => {
    setIsFilterVisible(true);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cn(styles.filter, {
        [styles.hidden]: !isFilterVisible,
        [styles.open]: isOpen,
      })}
    >
      <button className={styles.button} onClick={handleFilterButtonClick}>
        <svg
          className={styles["filter-button"]}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="-20 -20 550 550"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0,512) scale(0.1,-0.1)"
            fill={isOpen ? "currentColor" : "transparent"}
            stroke="currentColor"
            strokeWidth="300"
          >
            <path
              d="M210 5114 c-70 -11 -101 -27 -139 -71 -64 -72 -86 -167 -56 -241 11
    -26 286 -307 930 -952 l915 -915 2 -915 c3 -867 4 -917 21 -950 23 -42 990
    -1015 1032 -1037 109 -59 264 -12 317 95 l23 47 3 1380 2 1380 915 915 c644
    645 919 926 930 952 8 21 15 50 15 66 0 52 -29 127 -67 171 -71 84 177 76
    -2463 77 -1295 1 -2366 0 -2380 -2z"
            />
          </g>
        </svg>
      </button>
      <FilterCurrency
        buttons={buttonGroup}
        currency={currency}
        onClick={handleClickCurrency}
      />
      <FilterStops
        checkboxes={checkboxGroup}
        transferStops={transferStops}
        onChange={handleChangeStops}
        onClick={handleClickStops}
      />
    </div>
  );
};
