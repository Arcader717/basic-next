import type { Metadata } from 'next';
import Link from 'next/link';
import './global.css';
import styles from './index.module.css';

export const metadata: Metadata = {
    title: "Basic",
    description: "A basic Next.js app"
}

function NavLink({ text, href, active }) {
    if (active === true) {
        return (
            <Link href={href}>
                <a className={`${styles.active} ${styles.navLink}`}>{text}</a>
            </Link>
        );
    } else {
        return (
            <Link href={href}>
                <a className={styles.navLink}>{text}</a>
            </Link>  
        );
    };
}

const Page: React.FC = () => {
    return ( 
        <div>
            <div className={styles.nav}>
                <div className={styles.navLinks}>
                    <NavLink text="Home" href="/" active={true} />
                    <NavLink text="News" href="/#news" active={false} />
                    <NavLink text="Contact" href="/#contact" active={false} />
                    <NavLink text="About" href="/#about" active={false} />
                    <button className={styles.disBtn}>
                        <NavLink text="Login with Discord" href="/login" active={false} />
                    </button>
                </div>
            </div>
            <h1 className={styles.home}>Chronic</h1>
            <Link href="/callback">
                <a>Callback page</a>
            </Link>
        </div>
    );
};

export default Page;
