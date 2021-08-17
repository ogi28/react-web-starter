import { FC } from "react";
import styles from './menuItem.module.css';

export const MenuItem: FC = (props) => {
  const { children } = props;
  return <div className={styles.menuItem}>{children}</div>

}
