import React, { FC } from "react";
import cn from "classnames";
import styles from "./text.module.scss";
import { ITextProps } from "../../../types/text.ts";

export const Text: FC<ITextProps> = ({
  As = "span",
  children,
  size = 18,
  color = "grey-dark",
  weight = "regular",
}) => {
  const classes = cn(
    styles.text,
    styles[`size-${size}`],
    styles[color],
    styles[`weight-${weight}`],
  );
  return <As className={classes}>{children}</As>;
};
