import type { Metadata } from 'next';
import Link from 'next/link';
import './global.css';
import styles from './index.module.css';

export const metadata: Metadata = {
    title: "Basic",
    description: "A basic Next.js app"
}

const Page: React.FC = () => {
  return ( 
    <div className={styles.nav}>
        <div className={styles.navLinks}>
            <Link href="/">
                <a className={`${styles.active} ${styles.navLink}`}>Home</a>
            </Link>
        </div>
    </div>
    <h1 className={styles.home}>Chronic</h1>
    <Link href="/callback">
        <a>Callback page</a>
    </Link>
  );
};

export default Page;
