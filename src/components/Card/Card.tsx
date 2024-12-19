import {FC} from 'react';
import {ITicket} from "../../types/ticket.ts";
import styles from './card.module.scss'
import {getTransferWord} from "../../helper/getTransferWord.ts";
import {getDateFormatter} from "../../helper/getDateFormatter.ts";
import {Text} from "../UI/Text";

interface ICardProps {
  ticket: ITicket
}

const Card: FC<ICardProps> = ({ticket}) => {

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img className={styles.logo} alt={`${ticket.carrier} airlines`} src={`src/assets/images/airlines/${ticket.carrier}.svg`}/>
        <button type='button' className={styles.button}>
          <Text size={24} color={'white'}>
            Купить<br />
            за {ticket.currencyPrice}
          </Text>
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.top}>
          <Text size={48}>
            {ticket.departure_time}
          </Text>
          <div className={styles['top-deliver']}>
            <Text size={18} color={'grey'}>
              {getTransferWord(ticket.stops)}
            </Text>
          </div>
          <Text size={48}>
            {ticket.arrival_time}
          </Text>
        </div>

        <div className={styles.bottom}>
          <div>
            <Text size={18} color={'grey-dark'} As={"p"} weight={'medium'}>
              {ticket.origin}, {ticket.origin_name}
            </Text>

            <Text size={18} color={'grey'} As={"p"}>
              {getDateFormatter(ticket.departure_date)}
            </Text>
          </div>

          <div>
            <Text size={18} color={'grey-dark'} As={"p"} weight={'medium'}>
              {ticket.destination_name}, {ticket.destination}
            </Text>

            <Text size={18} color={'grey'} As={"p"}>
              {getDateFormatter(ticket.arrival_date)}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
