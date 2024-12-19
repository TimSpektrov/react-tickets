import {createContext, ReactNode, useContext, useState} from "react";
import {ITicket, STOPS_ALL, TCurrency, TTransferStops} from "../types/ticket.ts";
import {tickets as Tickets} from '../assets/tickets.json'
import {getPrice} from "../helper/getPrice.ts";

interface ITicketProviderProps {
  children: ReactNode
}

export interface ITicketContext {
  filteredTickets: ITicket[];
  currency: TCurrency;
  transferStops: TTransferStops[];
  setNewCurrency: (newCurrency: TCurrency) => void;
  setNewTransferStops: (newTransferStops: TTransferStops, only?: boolean) => void;
}

const initialTicketContext: ITicketContext = {
  filteredTickets: [],
  currency: 'rub',
  transferStops: [],
  setNewCurrency: () => {},
  setNewTransferStops: () => {}
};

export const TicketContext = createContext<ITicketContext>(initialTicketContext)
export const TicketProvider = ({children}: ITicketProviderProps) =>  {
  const [tickets] = useState<ITicket[]>(Tickets)
  const [currency, setCurrency] = useState<TCurrency>('rub')
  const [transferStops, setTransferStops] = useState<TTransferStops[]>([])

  console.log(transferStops)
  const filteredTickets = [...tickets
    .filter(item => {
      if (transferStops.length === 0 || transferStops.includes(STOPS_ALL)) {
        return true
      } else {
        return transferStops.includes(item.stops)
      }
    })
    .map(item => ({...item, currencyPrice: getPrice(item.price, currency)}))]

  console.log('filteredTickets', filteredTickets)

  const setNewCurrency = (newCurrency: TCurrency) => {
    if (newCurrency === currency) return
    setCurrency(newCurrency)
  }
  const setNewTransferStops = (newTransferStops: TTransferStops, only: boolean | undefined) => {
    const index = transferStops.indexOf(newTransferStops)
    console.log('newTransferStops', newTransferStops, 'index', index, 'only', only)
    if (index === -1) {
      if (only || newTransferStops === STOPS_ALL) {
        return setTransferStops([newTransferStops])
      }
      setTransferStops(prevState => [...prevState.filter((stops) => stops !== STOPS_ALL), newTransferStops])
    } else {
      setTransferStops(prevState => prevState.filter((stops, i) => i !== index))
    }
  }

  return(
    <TicketContext.Provider value={{filteredTickets, currency, transferStops, setNewCurrency, setNewTransferStops}}>
      {children}
    </TicketContext.Provider>
  )
}
export const useTicket = (): ITicketContext => useContext(TicketContext)