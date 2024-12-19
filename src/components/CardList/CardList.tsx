import {FC} from "react";
import {useTicket} from "../../hooks/useTickets.tsx";
import Card from "../Card/Card.tsx";
import styles from './cardlist.module.scss'

export const CardList: FC = () => {
  const {filteredTickets} = useTicket()
  return (
    <ul className={styles.list}>
      {filteredTickets.map(item => (
        <li className={styles.item} key={item.price}>
          <Card ticket={item} />
        </li>
      ))}
    </ul>
  )
}