import { FC, useEffect, useState } from "react";
import { useTicket } from "../../hooks/useTickets.tsx";
import Card from "../Card/Card.tsx";
import styles from "./cardlist.module.scss";

export const CardList: FC = () => {
  const { filteredTickets } = useTicket();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);
  const getWindowWidth = () => {
    setIsMobile(window.innerWidth <= 560);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);
  return (
    <ul className={styles.list}>
      {filteredTickets.map((item) => (
        <li className={styles.item} key={item.price}>
          <Card ticket={item} isMobile={isMobile} />
        </li>
      ))}
    </ul>
  );
};
