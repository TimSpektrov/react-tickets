import {ReactNode} from "react";

export type TSizes = 16 | 18 | 20 | 24 | 48;
export type TWeight = 'regular' | 'medium' | 'semi-bold' | 'bold';
export type TColor = 'blue' | 'white' | 'grey-dark' | 'grey' | 'grey-light';

export interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: ReactNode;
  size: TSizes;
  color?: TColor;
  weight?: TWeight
}