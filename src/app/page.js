import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <aside>
        <SideBar />
      </aside>
    </main>
  );
}
