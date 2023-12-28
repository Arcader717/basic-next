import type { Metadata } from 'next';
import Link from 'next/link';
import './global.css';
import styles from './index.module.css';

export const metadata: Metadata = {
    title: "Basic",
    description: "A basic Next.js app",
    openGraph: {
        title: "Chronic",
        description: "A W.I.P. dashboard for my discord bot, Chronic",
        url: "https://www.chronicbot.xyz",
        siteName: "Chronic",
        images: [
            {
                url: "https://www.chronicbot.xyz/api/og.png",
                width: 800,
                height: 400,
            }
        ],
        locale: "en_US",
        type: "website"
    },
}

function NavLink({ text, href, active }) {
    if (active === true) {
        return (
            <Link href={href} style={{ textDecoration: 'none' }}>
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
        <>
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
        </>
    );
};

export default Page;
