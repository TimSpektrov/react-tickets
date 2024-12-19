import {TCurrency, TTransferStops} from "./ticket.ts";

export interface IFilterButton {
  text: string;
  id: TCurrency;
}

export interface IFilterCheckbox {
  text: string;
  id: TTransferStops;
  only?: boolean;
}

