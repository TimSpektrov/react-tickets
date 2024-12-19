export type TCurrency = 'rub' | 'usd' | 'eur'
export const STOPS_ALL = 9
export type TTransferStops = 0 | 1 | 2 | 3 | typeof STOPS_ALL

export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: TTransferStops;
  price: number;
  currencyPrice?: string;
}