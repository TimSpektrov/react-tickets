import { TCurrency } from "../types/ticket.ts";

export const getPrice = (price: number, currency: TCurrency) => {
  const rate = {
    rub: 1,
    usd: 100,
    eur: 110,
  };
  const currencyPrice = price / rate[currency];
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return new Intl.NumberFormat("ru-RU", options).format(currencyPrice);
};
