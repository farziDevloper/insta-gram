import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      Hello World
      <div>
        <Link href="/admin/dashboard">Go to admin dashboard</Link>
        <div>
          <Link href={"/product/122"}>Go to product page</Link>
        </div>
        <div>
          <Link href={"/product/122/review/111"}>Go to product page</Link>
        </div>
      </div>
    </main>
  );
}
