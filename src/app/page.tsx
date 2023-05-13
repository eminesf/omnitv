import { Header } from "./components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className={styles.container}></div>
    </main>
  );
}
