import { FC } from "react";
import { Text } from "../../UI/Text";
import { IFilterCheckbox } from "../../../types/filter.ts";
import { TTransferStops } from "../../../types/ticket.ts";
import styles from "./filterstops.module.scss";
import { Checkbox } from "./Checkbox";
export interface IFilterStopsProps {
  checkboxes: IFilterCheckbox[];
  transferStops: TTransferStops[];
  onChange: (value: TTransferStops, only?: boolean) => void;
  onClick: (value: TTransferStops) => void;
}

export const FilterStops: FC<IFilterStopsProps> = ({
  checkboxes,
  transferStops,
  onChange,
  onClick,
}) => {
  return (
    <div>
      <div className={styles.container}>
        <Text size={20} As={"h3"} weight={"medium"} color={"grey-dark"}>
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </Text>
      </div>
      <div>
        {checkboxes.map((item) => (
          <Checkbox
            checked={transferStops.includes(item.id)}
            onChange={() => onChange(item.id, item.only)}
            onClick={() => onClick(item.id)}
            label={item.text}
            key={item.id}
            disabledButton={
              item.only ||
              (transferStops.length === 1 && transferStops[0] === item.id)
            }
          />
        ))}
      </div>
    </div>
  );
};
