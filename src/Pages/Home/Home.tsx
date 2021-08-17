import styles from "./Home.module.css";
import { Menu } from "../../Components/Menu"
import { Simulate } from "react-dom/test-utils";

export function Home() {
  return <div className={styles.container}>
    <div className={styles.leftMenu}>
      <Menu />

    </div>
    <div className={styles.main}>

    </div>
  </div>
}
