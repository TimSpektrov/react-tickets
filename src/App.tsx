import { CardList } from "./components/CardList";
import styles from "./app.module.scss";
import { Filter } from "./components/Filter";
function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src={"/images/airplane.png"} alt="logo" />
      </header>
      <main className={styles.main}>
        <Filter />
        <CardList />
      </main>
    </div>
  );
}

export default App;
