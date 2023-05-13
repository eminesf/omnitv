import Image from "next/image";
import styles from "./styles.module.css";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <li className={styles.lista}>
          <ul className={styles.item}>
            <a href="#">Início</a>
          </ul>
          <ul className={styles.item}>
            <a href="#">Preços</a>
          </ul>
        </li>
      </div>
      <div className={styles.logo}>
        <a href="#">
          <Image
            src="/logo.svg"
            width={85}
            height={85}
            alt="logo do cabeçalho"
          />
        </a>
      </div>
      <div className={styles.container}>
        <a
          href="http://bit.ly/3LWY8H4"
          target="_blank"
          className={styles.botao}
        >
          Fale conosco <AiOutlineWhatsApp />
        </a>
      </div>
    </div>
  );
}
